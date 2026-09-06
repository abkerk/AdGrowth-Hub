import { AffiliateLinks, TrackedClick } from '../types';

/**
 * ========================================================
 * AFFILIATE LINK CONFIGURATION
 * Edit your affiliate links below or replace placeholders.
 * All outbound links open in a new tab with rel="nofollow sponsored noopener"
 * ========================================================
 */
export const defaultAffiliateLinks: AffiliateLinks = {
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

// Key used for local persistence if the user updates links via the live tester
const STORAGE_KEY = 'adgrowth_affiliate_links_custom';
const CLICKS_STORAGE_KEY = 'adgrowth_tracked_clicks';

/**
 * Get active affiliate links (checks localStorage first, falls back to default config)
 */
export function getAffiliateLinks(): AffiliateLinks {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...defaultAffiliateLinks, ...parsed };
    }
  } catch {
    // ignore localStorage errors
  }
  return { ...defaultAffiliateLinks };
}

/**
 * Save custom affiliate links for testing
 */
export function saveCustomAffiliateLinks(links: Partial<AffiliateLinks>): void {
  try {
    const current = getAffiliateLinks();
    const updated = { ...current, ...links };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('affiliate-links-updated'));
  } catch (e) {
    console.error('Failed to save affiliate links:', e);
  }
}

/**
 * Reset links to code defaults
 */
export function resetAffiliateLinks(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('affiliate-links-updated'));
  } catch (e) {
    console.error('Failed to reset affiliate links:', e);
  }
}

/**
 * Detect traffic source from URL params, referrer, or user agent
 */
export function detectTrafficSource(): string {
  if (typeof window === 'undefined') return 'Direct / Unknown';

  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get('utm_source');
  const utmMedium = params.get('utm_medium');
  const utmCampaign = params.get('utm_campaign');

  if (utmSource) {
    return `UTM: ${utmSource}${utmMedium ? ` / ${utmMedium}` : ''}${utmCampaign ? ` (${utmCampaign})` : ''}`;
  }

  const referrer = document.referrer;
  if (!referrer) return 'Direct / Social App In-App Browser';

  try {
    const refUrl = new URL(referrer);
    const host = refUrl.hostname.toLowerCase();
    if (host.includes('instagram')) return 'Instagram (Reels / Bio)';
    if (host.includes('youtube')) return 'YouTube (Shorts / Channel)';
    if (host.includes('tiktok')) return 'TikTok';
    if (host.includes('facebook') || host.includes('fb.com')) return 'Facebook';
    if (host.includes('pinterest')) return 'Pinterest';
    if (host.includes('twitter') || host.includes('x.com')) return 'X (Twitter)';
    if (host.includes('linkedin')) return 'LinkedIn';
    return refUrl.hostname;
  } catch {
    return referrer;
  }
}

/**
 * Reusable affiliate click tracker
 * 
 * Prepares the code so analytics can easily be connected (e.g. Google Analytics 4, Meta Pixel, Plausible).
 * Tracks:
 * - Service clicked
 * - Button clicked
 * - Traffic source if available
 * - Timestamp
 * 
 * Does not collect unnecessary personal information.
 */
export function trackAffiliateClick(
  serviceName: string,
  buttonText: string = 'CTA',
  targetUrl: string = ''
): void {
  const trafficSource = detectTrafficSource();
  const timestamp = new Date().toISOString();

  const clickData: TrackedClick = {
    serviceName,
    buttonText,
    trafficSource,
    timestamp,
    targetUrl
  };

  // 1. Console log with clean styling for developer inspection
  console.log(
    `%c[AdGrowth Hub Analytics]%c Outbound Affiliate Click:%c ${serviceName}`,
    'color: #059669; font-weight: bold;',
    'color: #64748b;',
    'color: #0f172a; font-weight: bold;',
    clickData
  );

  // 2. Dispatch custom DOM event for custom integrations (Google Tag Manager, Meta Pixel)
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('affiliate_click', {
      detail: clickData
    });
    window.dispatchEvent(event);

    // Call window.gtag if present
    const win = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof win.gtag === 'function') {
      win.gtag('event', 'affiliate_click', {
        service_name: serviceName,
        button_text: buttonText,
        traffic_source: trafficSource,
        destination_url: targetUrl
      });
    }

    // Call window.fbq if present
    const fbWin = window as unknown as { fbq?: (...args: unknown[]) => void };
    if (typeof fbWin.fbq === 'function') {
      fbWin.fbq('trackCustom', 'AffiliateClick', {
        service: serviceName,
        button: buttonText
      });
    }

    // 3. Keep local recent history log for testing/verification
    try {
      const stored = localStorage.getItem(CLICKS_STORAGE_KEY);
      const list: TrackedClick[] = stored ? JSON.parse(stored) : [];
      list.unshift(clickData);
      if (list.length > 50) list.length = 50; // keep last 50
      localStorage.setItem(CLICKS_STORAGE_KEY, JSON.stringify(list));
      window.dispatchEvent(new Event('tracked-clicks-updated'));
    } catch {
      // ignore
    }
  }
}

export function getTrackedClicks(): TrackedClick[] {
  try {
    const stored = localStorage.getItem(CLICKS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function clearTrackedClicks(): void {
  try {
    localStorage.removeItem(CLICKS_STORAGE_KEY);
    window.dispatchEvent(new Event('tracked-clicks-updated'));
  } catch {
    // ignore
  }
}
