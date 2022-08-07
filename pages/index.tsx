import { GetStaticProps } from "next";
import { getAllPostsSorted } from "../libs/posts";
import SinglePost from "../components/Blocks/SinglePost";
import Presentation from "../components/Blocks/Presentation";
import BaseContainer from "../components/Layouts/BaseContainer";
import { projectsData } from "../data/projects/projectsData";
import { PostsProps } from "../types/types";
import SingleProject from "../components/Blocks/SingleProject";
import Image from "next/image";
import Link from "next/link";

const Home = (props: PostsProps) => {
  const { posts } = props;
  return (
    <BaseContainer>
      <h1 className=" mx-auto  pb-4 ">Nabil Yassine</h1>

      <Presentation />
      <div className="pt-10">
        <Image
          src="/static/blog-img.png"
          layout="responsive"
          width={5}
          height={2}
          alt=""
        />
        <h2 className="pt-10">Latest Posts</h2>
        <Link href="/blog">
          <span className="block cursor-pointer py-3 hover:text-primary">
            See all posts
          </span>
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

      <div className="py-10">
        <Image
          src="/static/projects-img.png"
          layout="responsive"
          width={5}
          height={2}
          alt=""
        />
        <h2 className="pt-10">Latest projects</h2>

        <Link href="/projects">
          <span className="block cursor-pointer pt-3 hover:text-primary">
            See all projects
          </span>
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
