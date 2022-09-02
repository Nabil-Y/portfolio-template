import { GetStaticProps } from "next";
import { getAllPostsSorted } from "../libs/posts";
import Presentation from "../components/Blocks/HomePage/Presentation";
import BaseContainer from "../components/Layouts/BaseContainer";
import { PostsProps } from "../types/types";
import HomeProjects from "../components/Blocks/HomePage/HomeProjects";
import HomeBlog from "../components/Blocks/HomePage/HomeBlog";

const Home = (props: PostsProps) => {
  const { posts } = props;
  return (
    <BaseContainer>
      <h1 className=" mx-auto  pb-4 ">My name</h1>

      <Presentation />

      <HomeProjects />

      <HomeBlog posts={posts} />
      <div className="pt-8 text-center">
        Made from{" "}
        <a href="https://github.com/Nabil-Y/portfolio-template">
          nabil-y template
        </a>
      </div>
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

export default Home;
