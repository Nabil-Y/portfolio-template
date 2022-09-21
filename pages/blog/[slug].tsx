import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostsPaths, getPostData } from "../../libs/posts";
import { mdxToHtml } from "../../libs/mdx";
import { components } from "../../components/MDX/MDXcomponents";
import { MDXRemote } from "next-mdx-remote";
import BaseContainer from "../../components/Layouts/BaseContainer";
import { BlogPostProps } from "../../types/types";

const BlogPost = (props: BlogPostProps) => {
  const { title, description, date, image } = props.meta;
  const { html, readingTime } = props;

  return (
    <BaseContainer
      title={title}
      description={description}
      image={image}
      date={new Date(date).toLocaleDateString()}
      type="article"
    >
      <article>
        <h1 className="pb-6">{title}</h1>

        {title !== "About me" && (
          <div className="flex justify-between text-greyDark dark:text-grey">
            <div>My Name / {date}</div> <div>{readingTime}</div>
          </div>
        )}

        <div className="prose pt-12 dark:prose-invert">
          <MDXRemote {...html} components={components} />
        </div>
      </article>
    </BaseContainer>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostsPaths();
  return {
    paths,
    fallback: false,
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
