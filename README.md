# Portfolio template

Build a SEO-friendly blog/portfolio in less than 10 minutes with this template.

Built with Next.js, TypeScript and TailwindCSS. [Live Demo](https://portfolio-template-amber.vercel.app/) deployed on Vercel.

Please star this project if it was helpful!

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Blog**: [MDX](https://mdxjs.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

Template made from [my website](https://nabil-y.com)

Inspired by [Lee Robinson](https://leerob.io).

## Tutorial

### Use this template

in your terminal, run this to clone the template:

`git clone https://github.com/Nabil-Y/portfolio-template.git`

To launch the development server, cd in the portfolio-template repository and run `yarn dev`

### Edit content

In `/components/Layouts/BaseContainer.tsx` and edit:

1. Your base meta data in const meta, line 10
1. Replace your name in lines 25, 31, 37.

Write your name in :

1. `/pages/index.tsx` : Line 13
1. `/pages/blog/[slug].tsx`: Line 26

Change GitHub, Twitter, Linkedin links in:

1. `/components/Blocks/HomePage/Presentation.tsx`: Lines 10 to 20
1. `/data/posts/about.mdx`: At the end of the file

For blog and projects:

1. Complete your about page by editing `/data/posts/about.mdx`
1. Complete your first blog post by editing `/data/posts/my-first-article.mdx`
1. To add more articles, add another mdx file in `/data/posts/` with same formatting as `my-first-article.mdx`. The name of the file must be identical to the slug key with `.mdx` at the end.
1. Add projects data by editing `/data/projects/projectsData.ts` with same formatting as the two first projects.

### Change styles and images

- To change the font, you can import another font at the top of `/styles/globals.css` and add it `/tailwind.config.js`
- To change colors, edit them in `/tailwind.config.js`
- To change nav menu icon, replace `/public/static/icon.jpg` with another file with the same name or change the image source in `/components/UI/Pictures/ProfilePicture.tsx`
- To change blog or project illustration, replace the files in `/public/static` or the sources in `/components/UI/Pictures/` just like nav menu icon

**For projects and articles, use images with a width/height ratio of 2/1**

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
