import React, { useState, useEffect } from 'react';
import { X, Check, Copy, RefreshCw, ExternalLink, Activity, Link as LinkIcon, Trash2 } from 'lucide-react';
import {
  getAffiliateLinks,
  saveCustomAffiliateLinks,
  resetAffiliateLinks,
  defaultAffiliateLinks,
  getTrackedClicks,
  clearTrackedClicks,
  detectTrafficSource
} from '../config/affiliateLinks';
import { AffiliateLinks, TrackedClick } from '../types';

interface LinkTesterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LinkTesterModal: React.FC<LinkTesterModalProps> = ({ isOpen, onClose }) => {
  const [links, setLinks] = useState<AffiliateLinks>(getAffiliateLinks());
  const [trackedClicks, setTrackedClicks] = useState<TrackedClick[]>([]);
  const [activeTab, setActiveTab] = useState<'links' | 'clicks' | 'code'>('links');
  const [copied, setCopied] = useState(false);
  const [savedFeedback, setSavedFeedback] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLinks(getAffiliateLinks());
      setTrackedClicks(getTrackedClicks());
    }

    const updateClicks = () => setTrackedClicks(getTrackedClicks());
    window.addEventListener('tracked-clicks-updated', updateClicks);
    return () => window.removeEventListener('tracked-clicks-updated', updateClicks);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (key: keyof AffiliateLinks, value: string) => {
    setLinks((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    saveCustomAffiliateLinks(links);
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2500);
  };

  const handleReset = () => {
    if (window.confirm('Reset all affiliate URLs to default placeholders?')) {
      resetAffiliateLinks();
      setLinks(defaultAffiliateLinks);
    }
  };

  const formattedJsCode = `const affiliateLinks = {
  top1: "${links.top1}",
  top2: "${links.top2}",
  top3: "${links.top3}",

  middle1: "${links.middle1}",
  middle2: "${links.middle2}",
  middle3: "${links.middle3}",

  bottom1: "${links.bottom1}",
  bottom2: "${links.bottom2}",
  bottom3: "${links.bottom3}",

  main: "${links.main}"
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(formattedJsCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentSource = detectTrafficSource();

  return (
    <div
      id="link-tester-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
    >
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
              <LinkIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 id="modal-title" className="text-base font-bold text-slate-900">
                Affiliate Link Configuration &amp; Analytics
              </h3>
              <p className="text-xs text-slate-500">
                Live URL inspector and click tracking logger
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 px-5 pt-3 gap-4 bg-white">
          <button
            type="button"
            onClick={() => setActiveTab('links')}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'links'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Configure URLs (9 Cards + Main)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('clicks')}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'clicks'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Click Logs ({trackedClicks.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'code'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Export JS Object
          </button>
        </div>

        {/* Content Area */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {activeTab === 'links' && (
            <div className="space-y-4">
              <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl text-xs text-emerald-900 leading-relaxed">
                <strong>Current Detected Traffic Source:</strong> <code className="bg-emerald-100/70 px-1 py-0.5 rounded font-mono text-[11px]">{currentSource}</code>.
                <br />
                All affiliate links are automatically tagged with <code className="bg-emerald-100/70 px-1 py-0.5 rounded font-mono text-[11px]">rel="nofollow sponsored noopener"</code> and <code className="bg-emerald-100/70 px-1 py-0.5 rounded font-mono text-[11px]">target="_blank"</code>.
              </div>

              {/* Main Affiliate Link */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                  ⭐ Main Affiliate Link (Hero, Navbar, Final CTA)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={links.main}
                    onChange={(e) => handleInputChange('main', e.target.value)}
                    className="flex-1 text-xs sm:text-sm px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="https://go.fiverr.com/..."
                  />
                  <a
                    href={links.main}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="px-3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1"
                  >
                    <span>Test</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Top Picks Links (3) */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Top Picks Links
                </h4>
                
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Card 1: Google Forms &amp; Surveys (<code>top1</code>)
                  </label>
                  <input
                    type="text"
                    value={links.top1}
                    onChange={(e) => handleInputChange('top1', e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Card 2: Lead Generation &amp; Appointments (<code>top2</code>)
                  </label>
                  <input
                    type="text"
                    value={links.top2}
                    onChange={(e) => handleInputChange('top2', e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Card 3: Facebook &amp; Instagram Ads (<code>top3</code>)
                  </label>
                  <input
                    type="text"
                    value={links.top3}
                    onChange={(e) => handleInputChange('top3', e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono"
                  />
                </div>
              </div>

              {/* Popular Services Links (3) */}
              <div className="space-y-2.5 pt-2 border-t border-slate-200">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Popular Services Links
                </h4>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Card 4: Facebook Ads Management (<code>middle1</code>)
                  </label>
                  <input
                    type="text"
                    value={links.middle1}
                    onChange={(e) => handleInputChange('middle1', e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Card 5: Facebook Ads Setup &amp; Optimization (<code>middle2</code>)
                  </label>
                  <input
                    type="text"
                    value={links.middle2}
                    onChange={(e) => handleInputChange('middle2', e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Card 6: Social Media Advertising (<code>middle3</code>)
                  </label>
                  <input
                    type="text"
                    value={links.middle3}
                    onChange={(e) => handleInputChange('middle3', e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono"
                  />
                </div>
              </div>

              {/* More Services Links (3) */}
              <div className="space-y-2.5 pt-2 border-t border-slate-200">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  More Services Links
                </h4>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Card 7: Facebook &amp; Instagram Advertising (<code>bottom1</code>)
                  </label>
                  <input
                    type="text"
                    value={links.bottom1}
                    onChange={(e) => handleInputChange('bottom1', e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Card 8: Meta Ads Campaign Management (<code>bottom2</code>)
                  </label>
                  <input
                    type="text"
                    value={links.bottom2}
                    onChange={(e) => handleInputChange('bottom2', e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Card 9: Facebook Advertising Management (<code>bottom3</code>)
                  </label>
                  <input
                    type="text"
                    value={links.bottom3}
                    onChange={(e) => handleInputChange('bottom3', e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'clicks' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600">
                  Real-time Outbound Click Activity Log
                </span>
                {trackedClicks.length > 0 && (
                  <button
                    type="button"
                    onClick={clearTrackedClicks}
                    className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear logs</span>
                  </button>
                )}
              </div>

              {trackedClicks.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                  <Activity className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-700">No clicks recorded yet</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Click any service card button on the page to test the real-time event logger!
                  </p>
                </div>
              ) : (
                <div className="space-y-2 max-h-[360px] overflow-y-auto">
                  {trackedClicks.map((click, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900">{click.serviceName}</span>
                        <span className="text-[11px] text-slate-500">
                          {new Date(click.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span>Button: <strong className="text-slate-800">{click.buttonText}</strong></span>
                        <span className="text-[11px] bg-emerald-100 text-emerald-800 font-medium px-2 py-0.5 rounded">
                          {click.trafficSource}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-slate-500 truncate">
                        URL: {click.targetUrl}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-600">
                Copy this JavaScript object to directly update your production configuration file:
              </p>
              <pre className="p-4 bg-slate-900 text-emerald-400 rounded-xl font-mono text-xs overflow-x-auto">
                {formattedJsCode}
              </pre>
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy JavaScript Code'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset to Defaults</span>
          </button>

          <div className="flex items-center gap-2">
            {savedFeedback && (
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 animate-in fade-in">
                <Check className="w-3.5 h-3.5" /> Saved!
              </span>
            )}
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs cursor-pointer"
            >
              Save Live URLs
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
