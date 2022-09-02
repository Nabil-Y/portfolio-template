import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface ButtonProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface BaseContainerProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  type?: string;
}

export interface CustomMeta {
  title: string;
  description: string;
  image: string;
  date: string;
}

export interface BlogPostProps {
  children: ReactNode;
  html: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  readingTime: string;
  meta: CustomMeta;
}

export interface PostsProps {
  posts: Record<string, string>[];
}

export interface SearchInputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  name: string;
}

export interface SinglePostProps {
  title: string;
  slug: string;
  readingTime: string;
  description: string;
}

export interface Project {
  repoLink: string;
  demoLink: string;
  imgLink?: string;
  title: string;
  description?: string;
  tags: string[];
}

export interface MobileMenuProps {
  menuState: {
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  };
}
