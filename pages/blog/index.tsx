import { useState } from "react";
import { GetStaticProps } from "next";
import { getAllPostsSorted } from "../../libs/posts";
import BaseContainer from "../../components/Layouts/BaseContainer";
import { BlogHomePageProps } from "../../types/types";
import SearchInput from "../../components/Inputs/SearchInput";
import SinglePost from "../../components/Blocks/SinglePost";

const BlogHomePage = (props: BlogHomePageProps) => {
  const { posts } = props;
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <BaseContainer>
      <h1>Blog</h1>
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
  const latestPosts = getAllPostsSorted();

  return {
    props: { posts: latestPosts },
  };
};

export default BlogHomePage;
