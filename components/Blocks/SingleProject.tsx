import { Project } from "../../types/types";
import Image from "next/image";
import Tag from "../UI/Tag";

const SingleProject = (props: Project) => {
  const { repoLink, demoLink, title, description, tags, imgLink } = props;
  return (
    <article>
      <a href={repoLink} className="group block">
        <div className="my-5 overflow-hidden rounded-lg">
          {imgLink && (
            <Image
              src={imgLink}
              alt={`${title} demo`}
              layout="responsive"
              width={2}
              height={1}
            />
          )}
        </div>
        <h3 className="my-4 group-hover:text-primaryDark dark:group-hover:text-primary">
          {title}
        </h3>
      </a>

      <div>
        {tags.map((tag) => (
          <Tag key={tag} content={tag} />
        ))}
      </div>

      <div className="mt-2 underline">
        <div className="mr-2 inline-block">Visit</div>
        <a href={repoLink} className="mr-2">
          Repository
        </a>
        <a href={demoLink}>Live Demo</a>
      </div>

      {description && (
        <p className="mt-6 mb-12 text-greyDark dark:text-grey">{description}</p>
      )}
    </article>
  );
};

export default SingleProject;
