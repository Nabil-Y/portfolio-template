import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostsPaths, getPostData } from "../../libs/posts";
import { mdxToHtml } from "../../libs/mdx";
import { components } from "../../components/MDX/MDXcomponents";
import { MDXRemote } from "next-mdx-remote";
import PostLayout from "../../components/Layouts/PostLayout";
import { BlogPostProps } from "../../types/types";

const BlogPost = (props: BlogPostProps) => {
  const { title, description, date, image } = props.meta;
  const { html, readingTime } = props;

  return (
    <PostLayout
      title={title}
      description={description}
      image={image}
      date={date}
      readingTime={readingTime}
    >
      <MDXRemote {...html} components={components} />
    </PostLayout>
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
