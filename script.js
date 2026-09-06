/**
 * AdGrowth Hub - Affiliate Links & Analytics Tracking Script
 *
 * This file contains the JavaScript configuration for all affiliate links
 * and outbound click tracking.
 */

// ==========================================
// AFFILIATE LINK CONFIGURATION
// Replace the bracketed URLs with your real affiliate links.
// ==========================================
const affiliateLinks = {
  top1: "[TOP_LINK_1]",
  top2: "[TOP_LINK_2]",
  top3: "[TOP_LINK_3]",

  middle1: "[MIDDLE_LINK_1]",
  middle2: "[MIDDLE_LINK_2]",
  middle3: "[MIDDLE_LINK_3]",

  bottom1: "[BOTTOM_LINK_1]",
  bottom2: "[BOTTOM_LINK_2]",
  bottom3: "[BOTTOM_LINK_3]",

  main: "[MAIN_AFFILIATE_LINK]"
};

// ==========================================
// REUSABLE ANALYTICS TRACKER
// ==========================================
/**
 * Track affiliate link click
 * @param {string} serviceName - Name of the service clicked
 * @param {string} buttonText - Label of the CTA button clicked
 */
function trackAffiliateClick(serviceName, buttonText = "CTA") {
  const urlParams = new URLSearchParams(window.location.search);
  const trafficSource = urlParams.get("utm_source") || (document.referrer ? new URL(document.referrer).hostname : "Direct / Social App");
  const timestamp = new Date().toISOString();

  const clickData = {
    service: serviceName,
    button: buttonText,
    trafficSource: trafficSource,
    timestamp: timestamp
  };

  console.log("[AdGrowth Hub Analytics] Outbound Click:", clickData);

  // Dispatch custom event for Google Tag Manager / Meta Pixel
  window.dispatchEvent(new CustomEvent("affiliate_click", { detail: clickData }));

  // Google Analytics 4 integration helper
  if (typeof window.gtag === "function") {
    window.gtag("event", "affiliate_click", {
      service_name: serviceName,
      button_text: buttonText,
      traffic_source: trafficSource
    });
  }

  // Meta Pixel integration helper
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", "AffiliateClick", {
      service: serviceName,
      button: buttonText
    });
  }
}

// Export for module systems if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = { affiliateLinks, trackAffiliateClick };
}
