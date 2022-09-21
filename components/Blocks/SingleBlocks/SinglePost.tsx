import { SinglePostProps } from "../../../types/types";
import Link from "next/link";

const SinglePost = (props: SinglePostProps) => {
  const { title, readingTime, description, slug } = props;
  return (
    <Link href={`blog/${slug}`}>
      <a className="block pt-3 sm:pt-6">
        <article className="group cursor-pointer py-3">
          <div className="flex items-center justify-between py-3">
            <h3 className="group-hover:text-primary">{title}</h3>
            <div className="min-w-[100px] text-right text-greyDark dark:text-grey">
              {readingTime}
            </div>
          </div>
          <p className="font-normal text-greyDark dark:text-grey">
            {description}
          </p>
        </article>
      </a>
    </Link>
  );
};

export default SinglePost;
