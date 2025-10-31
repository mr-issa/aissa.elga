import type { Project, Skill, Testimonial, GalleryItem } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'Brand Identity', icon: 'ph-sketch-logo' },
  { name: 'Social Media', icon: 'ph-share-network' },
  { name: 'Email Marketing', icon: 'ph-paper-plane-tilt' },
  { name: 'Digital Ads', icon: 'ph-megaphone' },
  { name: 'Content Marketing', icon: 'ph-pen-nib' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "A.EL GARRAM's strategic vision completely transformed our online presence. The results were simply outstanding!",
    name: 'Jane Doe',
    title: 'CEO, Innovate Inc.',
    imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    quote: "The attention to detail and creative approach were second to none. I couldn't be happier with the outcome.",
    name: 'John Smith',
    title: 'Founder, Creative Solutions',
    imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
  },
  {
    quote: 'Working with A.EL GARRAM was a breeze. Professional, insightful, and delivered beyond our expectations.',
    name: 'Emily White',
    title: 'Marketing Director, TechCorp',
    imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Innovate Inc. Rebrand',
    description: 'A complete overhaul of the brand identity for a leading tech startup, including a new logo, website, and social media assets.',
    imageUrl: 'https://picsum.photos/seed/rebrand/800/600',
    tags: ['Branding', 'Web Design', 'UI/UX'],
    liveUrl: '#',
  },
  {
    title: 'Creative Solutions Campaign',
    description: 'Led a multi-channel digital advertising campaign that increased lead generation by over 300% in a single quarter.',
    imageUrl: 'https://picsum.photos/seed/campaign/800/600',
    tags: ['Digital Advertising', 'Social Media', 'Content'],
    liveUrl: '#',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, imageUrl: 'https://picsum.photos/seed/gal1/500/500', title: 'Logo Concept 1' },
  { id: 2, imageUrl: 'https://picsum.photos/seed/gal2/500/500', title: 'Social Media Graphic' },
  { id: 3, imageUrl: 'https://picsum.photos/seed/gal3/500/500', title: 'Website Mockup' },
  { id: 4, imageUrl: 'https://picsum.photos/seed/gal4/500/500', title: 'Ad Creative' },
];

export const SOCIAL_LINKS = [
    { name: 'LinkedIn', href: '#', icon: 'ph-linkedin-logo' },
    { name: 'Twitter', href: '#', icon: 'ph-twitter-logo' },
    { name: 'Dribbble', href: '#', icon: 'ph-dribbble-logo' },
];