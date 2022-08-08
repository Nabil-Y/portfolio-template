import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllPostsSorted } from "../libs/posts";
import SinglePost from "../components/Blocks/SinglePost";
import Presentation from "../components/Blocks/Presentation";
import BaseContainer from "../components/Layouts/BaseContainer";
import { projectsData } from "../data/projects/projectsData";
import { PostsProps } from "../types/types";
import SingleProject from "../components/Blocks/SingleProject";
import BlogPicture from "../components/UI/Pictures/BlogPicture";
import ProjectsPicture from "../components/UI/Pictures/ProjectsPicture";

const Home = (props: PostsProps) => {
  const { posts } = props;
  return (
    <BaseContainer>
      <h1 className=" mx-auto  pb-4 ">Nabil Yassine</h1>

      <Presentation />

      <div className="py-10">
        <ProjectsPicture />
        <h2 className="pt-10">Latest projects</h2>

        <Link href="/projects">
          <a className="block cursor-pointer pt-3 underline hover:text-primaryDark dark:hover:text-primary">
            See all projects
          </a>
        </Link>

        {projectsData.slice(0, 3).map((project) => (
          <div key={project.title}>
            <SingleProject
              title={project.title}
              tags={project.tags}
              repoLink={project.repoLink}
              demoLink={project.demoLink}
            />
          </div>
        ))}
      </div>

      <div className="py-10">
        <BlogPicture />
        <h2 className="pt-10">Latest Posts</h2>
        <Link href="/blog">
          <a className="block cursor-pointer py-3 underline hover:text-primaryDark dark:hover:text-primary">
            See all posts
          </a>
        </Link>
        <ul>
          {posts.slice(0, 3).map((post) => (
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
