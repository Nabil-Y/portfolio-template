import { useState } from "react";
import { GetStaticProps } from "next";
import { getAllPostsSorted } from "../../libs/posts";
import BaseContainer from "../../components/Layouts/BaseContainer";
import { CustomMeta, PostsProps } from "../../types/types";
import SearchInput from "../../components/Inputs/SearchInput";
import SinglePost from "../../components/Blocks/SingleBlocks/SinglePost";
import BlogPicture from "../../components/UI/Pictures/BlogPicture";

const customMeta: Partial<CustomMeta> = {
  title: "Blog",
  description: "Here is my blog where I write about web development",
};

const BlogHomePage = (props: PostsProps) => {
  const { posts } = props;
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <BaseContainer {...customMeta}>
      <h1>Blog</h1>
      <h2 className="sr-only">Latest posts</h2>

      <BlogPicture />

      <SearchInput
        name="search-blog-post"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
      />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.slug}>
            <SinglePost
              title={post.title}
              slug={post.slug}
              description={post.description}
              readingTime={post.readingTime}
            />
          </li>
        ))}
      </ul>
    </BaseContainer>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const latestPosts = getAllPostsSorted().filter(
    (post) => post.slug !== "about"
  );

  return {
    props: { posts: latestPosts },
  };
};

export default BlogHomePage;
