import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostsPaths, getPostData } from "../../libs/posts";
import { mdxToHtml } from "../../libs/mdx";
import { components } from "../../components/MDX/MDXcomponents";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import ThemeSwitch from "../../components/UI/ThemeSwitch";

const BlogPost = (props: {
  meta: Record<string, string>;
  html: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
}) => {
  const { title, description, author, date, keywords, image } = props.meta;
  const { html } = props;

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

      <div className="prose dark:prose-invert">
        <MDXRemote {...html} components={components} />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostsPaths();
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string);
  const { meta, mdx } = postData;
  const { html, readingTime } = await mdxToHtml(mdx);

  return {
    props: {
      meta,
      html,
      readingTime,
    },
  };
};

export default BlogPost;
