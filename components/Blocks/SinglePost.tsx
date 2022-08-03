import { SinglePostProps } from "../../types/types";
import Link from "next/link";

const SinglePost = (props: SinglePostProps) => {
  const { title, readingTime, description, slug } = props;
  return (
    <article className="py-6">
      <div className="flex items-center justify-between py-3">
        <h2>
          <Link href={`blog/${slug}`}>{title}</Link>
        </h2>

        <div className="text-greyDark dark:text-grey">{readingTime}</div>
      </div>

      <p className="text-greyDark dark:text-grey">{description}</p>
    </article>
  );
};

export default SinglePost;
