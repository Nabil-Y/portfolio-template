import Link from "next/link";
import { useState } from "react";
import { GetStaticProps } from "next";
import { getAllPostsSorted } from "../../libs/posts";
import BaseContainer from "../../components/Layouts/BaseContainer";
import { BlogHomePageProps } from "../../types/types";
import SearchInput from "../../components/Inputs/SearchInput";

const BlogHomePage = (props: BlogHomePageProps) => {
  const { posts } = props;
  const [query, setQuery] = useState("");

  return (
    <BaseContainer>
      <h1>Blog</h1>
      <SearchInput
        name="search-blog-post"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`blog/${post.slug}`}>{post.title}</Link>{" "}
          </li>
        ))}
      </ul>
    </BaseContainer>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const latestPosts = getAllPostsSorted().slice(0, 4);

  return {
    props: { posts: latestPosts },
  };
};

export default BlogHomePage;
