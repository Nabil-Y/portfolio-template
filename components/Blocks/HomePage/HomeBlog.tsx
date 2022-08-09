import Link from "next/link";
import { PostsProps } from "../../../types/types";
import BlogPicture from "../../UI/Pictures/BlogPicture";
import SinglePost from "../SingleBlocks/SinglePost";

const HomeBlog = (props: PostsProps) => {
  const { posts } = props;
  return (
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
  );
};

export default HomeBlog;
