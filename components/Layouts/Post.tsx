import { ReactNode } from "react";
import Head from "next/head";

const Post = (props: { children: ReactNode; meta: Record<string, string> }) => {
  const { title, description, author, date, keywords, image } = props.meta;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={description} />
        <meta property="author" content={author} />
        <meta property="keywords" content={keywords} />
        <meta property="type" content="article" />
        <meta property="article:published_time" content={date} />

        <meta property="og:site_name" content="Nabil-Y" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nabil_io" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <div className="prose dark:prose-invert">{props.children}</div>
    </>
  );
};

export default Post;
