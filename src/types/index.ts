import { PortableTextBlock } from "sanity";

export interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    }
  };
  excerpt: string;
  body: PortableTextBlock[];
  publishedAt: string;
  author?: Author;
  categories?: Category[];
  tags?: Tag[];
}

export interface Author {
  _id: string;
  name: string;
  slug: string;
  picture?: {
    asset: {
      _ref: string;
      _type: string;
    }
  };
  bio?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug?: string;
}

export interface Tag {
  _id: string;
  title: string;
  slug?: string;
}