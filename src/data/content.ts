import { Shield, BarChart3, Globe, Zap, Lock } from 'lucide-react';

export interface NavItem {
  label: string;
  href?: string;
}

export interface FeatureCard {
  icon: typeof Globe;
  title: string;
  description: string;
  iconColor: string;
  borderColor: string;
}

export interface BlogPost {
  id: string;
  category: {
    label: string;
    color: string;
  };
  readTime: string;
  title: string;
  description: string;
  author: {
    name: string;
    role: string;
    initials: string;
    avatar?: string;
    borderColor: string;
    bgColor: string;
  };
}

export interface FooterSection {
  title: string;
  titleColor: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export const siteConfig = {
  name: "Eventflo",
  tagline: "Revolutionary Event Platform",
  description: "Pioneering a new era in events through blockchain and AI technology.",
};

export const navigation: NavItem[] = [
  { label: "Home" },
  { label: "Features" },
  { label: "Blog" },
];

export const heroContent = {
  badge: "Revolutionary Event Platform",
  title: "Eventflo: Pioneering a new era in events",
  description: "Reshaping the industry through blockchain and AI to put power back in the hands of organizers and fans.",
  primaryCTA: "Try Eventflo Now",
};

export const howItWorksContent = {
  title: "How It Works",
  description: "Explain how Eventflo utilizes blockchain and AI to empower event organizers and fans.",
  features: [
    {
      icon: Shield,
      title: "Blockchain Technology",
      description: "Secure, transparent, and decentralized event management powered by blockchain technology.",
      iconColor: "text-coral",
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Advanced analytics and AI-driven recommendations for optimal event planning and execution.",
      iconColor: "text-coral",
    },
  ],
};

export const keyFeaturesContent = {
  title: "Key Features",
  description: "Discover what makes Eventflo the future of event management",
  features: [
    {
      icon: Globe,
      title: "Decentralized Event Management",
      description: "Take control of your events with our decentralized platform that puts organizers first.",
      iconColor: "bg-coral",
      borderColor: "border-coral-200",
    },
    {
      icon: BarChart3,
      title: "AI-Driven Analytics",
      description: "Enhanced event planning with intelligent insights and predictive analytics.",
      iconColor: "bg-payne-gray",
      borderColor: "border-payne-gray-200",
    },
    {
      icon: Lock,
      title: "Secure & Transparent Transactions",
      description: "Blockchain-powered security ensures every transaction is safe and transparent.",
      iconColor: "bg-battleship-gray",
      borderColor: "border-battleship-gray-200",
    },
  ] as FeatureCard[],
};

export const ctaContent = {
  title: "Ready to revolutionize your events?",
  description: "Join thousands of organizers who are already using Eventflo to create amazing experiences.",
  primaryButton: "Start Your Free Trial",
  secondaryButton: "Schedule Demo",
};

export const blogContent = {
  title: "Latest Insights",
  description: "Curated resources and articles that provide value to event organizers and attendees.",
  posts: [
    {
      id: "1",
      category: {
        label: "Event Planning",
        color: "bg-coral-100 text-coral-700",
      },
      readTime: "5 min read",
      title: "10 Tips for Successful Event Planning in 2024",
      description: "Learn the latest strategies and best practices for organizing memorable events.",
      author: {
        name: "John Doe",
        role: "Event Specialist",
        initials: "JD",
        avatar: "/avatars/01.png",
        borderColor: "border-coral",
        bgColor: "bg-coral",
      },
    },
    {
      id: "2",
      category: {
        label: "Technology",
        color: "bg-payne-gray-100 text-payne-gray-700",
      },
      readTime: "8 min read",
      title: "How Blockchain is Transforming Event Management",
      description: "Discover the revolutionary impact of blockchain technology on the events industry.",
      author: {
        name: "Jane Smith",
        role: "Tech Writer",
        initials: "JS",
        avatar: "/avatars/02.png",
        borderColor: "border-payne-gray",
        bgColor: "bg-payne-gray",
      },
    },
    {
      id: "3",
      category: {
        label: "Analytics",
        color: "bg-battleship-gray-100 text-battleship-gray-700",
      },
      readTime: "6 min read",
      title: "AI-Powered Event Analytics: A Complete Guide",
      description: "Master the art of data-driven event planning with AI analytics.",
      author: {
        name: "Mike Johnson",
        role: "Data Analyst",
        initials: "MJ",
        avatar: "/avatars/03.png",
        borderColor: "border-battleship-gray",
        bgColor: "bg-battleship-gray",
      },
    },
  ] as BlogPost[],
};

export const footerContent = {
  sections: [
    {
      title: "Product",
      titleColor: "text-coral",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "API", href: "#" },
        { label: "Documentation", href: "#" },
      ],
    },
    {
      title: "Company",
      titleColor: "text-coral",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Support",
      titleColor: "text-coral",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "Status", href: "#" },
        { label: "Security", href: "#" },
      ],
    },
  ] as FooterSection[],
  bottomLinks: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
  ],
  copyright: "© 2024 Eventflo. All rights reserved.",
};