import { ServiceCardItem, DecisionCardItem } from '../types';

export const topPicksCards: ServiceCardItem[] = [
  {
    id: 'card-1',
    badge: 'TOP PICK',
    emojiIcon: '📋',
    iconName: 'ClipboardList',
    title: 'Google Forms & Surveys',
    description: "Need a professional Google Form or survey? Find a freelancer who can create forms for feedback, registrations, questionnaires, and more.",
    buttonText: 'Find a Form Expert →',
    affiliateKey: 'top1',
    category: 'top'
  },
  {
    id: 'card-2',
    badge: 'TOP PICK',
    emojiIcon: '🎯',
    iconName: 'Target',
    title: 'Lead Generation & Appointments',
    description: 'Find freelancers who specialize in paid advertising campaigns designed to help businesses attract qualified leads and appointment opportunities.',
    buttonText: 'Explore Lead Generation →',
    affiliateKey: 'top2',
    category: 'top'
  },
  {
    id: 'card-3',
    badge: 'TOP PICK',
    emojiIcon: '📣',
    iconName: 'Megaphone',
    title: 'Facebook & Instagram Ads',
    description: 'Get help creating and improving Facebook and Instagram advertising campaigns for your business.',
    buttonText: 'Find an Ads Expert →',
    affiliateKey: 'top3',
    category: 'top'
  }
];

export const popularServicesCards: ServiceCardItem[] = [
  {
    id: 'card-4',
    emojiIcon: '📊',
    iconName: 'BarChart3',
    title: 'Facebook Ads Management',
    description: 'Find a freelancer to help manage and promote your Facebook advertising campaigns.',
    buttonText: 'Explore Facebook Ads →',
    affiliateKey: 'middle1',
    category: 'popular'
  },
  {
    id: 'card-5',
    emojiIcon: '⚙️',
    iconName: 'Settings',
    title: 'Facebook Ads Setup & Optimization',
    description: 'Get help setting up and optimizing Facebook ad campaigns for your business goals.',
    buttonText: 'Optimize Your Ads →',
    affiliateKey: 'middle2',
    category: 'popular'
  },
  {
    id: 'card-6',
    emojiIcon: '📱',
    iconName: 'Smartphone',
    title: 'Social Media Advertising',
    description: 'Explore professional services for creating social media advertisements that promote your business and reach potential customers.',
    buttonText: 'Create Social Ads →',
    affiliateKey: 'middle3',
    category: 'popular'
  }
];

export const moreServicesCards: ServiceCardItem[] = [
  {
    id: 'card-7',
    emojiIcon: '📈',
    iconName: 'TrendingUp',
    title: 'Facebook & Instagram Advertising',
    description: 'Find freelancers who can create and manage advertising campaigns across Facebook and Instagram.',
    buttonText: 'Explore Advertising →',
    affiliateKey: 'bottom1',
    category: 'more'
  },
  {
    id: 'card-8',
    emojiIcon: '🎯',
    iconName: 'Crosshair',
    title: 'Meta Ads Campaign Management',
    description: 'Find experts who can set up, manage, and improve Meta advertising campaigns for your business.',
    buttonText: 'Find a Meta Ads Expert →',
    affiliateKey: 'bottom2',
    category: 'more'
  },
  {
    id: 'card-9',
    emojiIcon: '🚀',
    iconName: 'Rocket',
    title: 'Facebook Advertising Management',
    description: 'Explore freelancers offering complete Facebook advertising management services.',
    buttonText: 'Explore Facebook Ads →',
    affiliateKey: 'bottom3',
    category: 'more'
  }
];

export const howItWorksSteps = [
  {
    number: '1',
    title: 'Choose a Service',
    description: 'Select the type of advertising help you need.'
  },
  {
    number: '2',
    title: 'Explore the Offer',
    description: "Click through to the recommended Fiverr service and review the freelancer's offer."
  },
  {
    number: '3',
    title: 'Choose What Works for You',
    description: "Review the freelancer's information, pricing, reviews, and services before making your decision."
  }
];

export const decisionCards: DecisionCardItem[] = [
  {
    title: 'Need Leads?',
    description: 'Explore Lead Generation & Appointment services.',
    buttonText: 'Find Lead Generation Help →',
    affiliateKey: 'top2'
  },
  {
    title: 'Need Better Ads?',
    description: 'Explore Facebook and Instagram advertising services.',
    buttonText: 'Explore Meta Ads →',
    affiliateKey: 'top3'
  },
  {
    title: 'Need Campaign Management?',
    description: 'Explore Facebook and Meta Ads management services.',
    buttonText: 'Find Campaign Help →',
    affiliateKey: 'middle1'
  }
];
