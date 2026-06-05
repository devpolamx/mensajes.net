/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  benefits: string[];
  iconName: string; // Dynamic icon from lucide-react
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  content: string; // Markdown or rich text paragraphs
  readTime: string;
  date: string;
  author: string;
  seoKeywords: string[];
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
}
