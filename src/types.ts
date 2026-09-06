export interface ServiceCardItem {
  id: string;
  badge?: string;
  emojiIcon: string;
  iconName: string;
  title: string;
  description: string;
  buttonText: string;
  affiliateKey: keyof AffiliateLinks;
  category: 'top' | 'popular' | 'more';
}

export interface AffiliateLinks {
  top1: string;
  top2: string;
  top3: string;
  middle1: string;
  middle2: string;
  middle3: string;
  bottom1: string;
  bottom2: string;
  bottom3: string;
  main: string;
}

export interface DecisionCardItem {
  title: string;
  description: string;
  buttonText: string;
  affiliateKey: keyof AffiliateLinks;
}

export interface TrackedClick {
  serviceName: string;
  buttonText: string;
  trafficSource: string;
  timestamp: string;
  targetUrl: string;
}
