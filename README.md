# Nabil Yassine

Web developer portfolio inspired by [Lee Robinson](leerob.io).

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Blog**: [MDX](https://mdxjs.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Overview

- `components/*` - Contains reusable components and page layouts.
- `data/blog` - Contains MDX files for each blog article and the about me page.
- `data/projects` - Contains all projects data in an array.
- `libs/*` - Short for "library", utilities functions to fetch posts and display MDX using next-mdx-remote.
- `pages/blog/*` - Contains the blog home page and the layout to generate static article pages at build time.
- `pages/*` - All other static pages.
- `public/*` - Static assets including favicon and images.
- `styles/*` - Global styles and Prism theme for code highligthing.
- `types/*` - Custom types and interfaces, mostly for typing component props.

## Running Locally

```
$ git clone https://github.com/Nabil-Y/personal-website.git
$ cd personal-website
$ yarn
$ yarn dev
```

## Cloning / Forking

Please remove all my personal information (blog posts, images, etc).
