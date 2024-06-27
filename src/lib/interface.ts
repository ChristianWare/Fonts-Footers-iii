import { ReactNode } from "react";

export interface ButtonProps {
  href: string;
  text: string;
  btnType: string;
  target?: string;
  download?: boolean;
  arrow?: boolean;
  onClick?: any;
}

export interface PageIntroProps {
  heading: string;
  copy: string;
  src: any;
  labelCopy?: string;
}

export interface BlogSectionProps {
  blogData: any;
}

export interface BlogData {
  meta: {
    category: string;
    thumbnaillUrl: string;
    date: string;
    readingTime: number;
    title: string;
    description: string;
  };
  slug: string;
}

export interface BlogPreviewProps {
  mapData: BlogData;
  key: number;
}

export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  publishedAt: string;
  titleImage: any;
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
  smallDescription: string;
  publishedAt: string;
}
