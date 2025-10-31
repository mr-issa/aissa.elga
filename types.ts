import type React from 'react';

export interface Skill {
  name: string;
  icon: string; // Phosphor icon class name
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
}