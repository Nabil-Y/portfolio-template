import React, { ReactNode } from "react";
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

export interface PostLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  image: string;
  date: string;
  readingTime: string;
}

export interface BlogPostProps {
  children: ReactNode;
  html: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  readingTime: string;
  meta: {
    title: string;
    description: string;
    image: string;
    date: string;
  };
}

export interface BlogHomePageProps {
  posts: Record<string, string>[];
}

export interface SearchInputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  name: string;
}
