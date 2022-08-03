import { Project } from "../../types/types";
import Image from "next/image";
import Tag from "../UI/Tag";

const SingleProject = (props: Project) => {
  const { repoLink, demoLink, title, description, tags, imgLink } = props;
  return (
    <article>
      <div className="my-10 overflow-hidden rounded-lg">
        <Image
          src={imgLink}
          alt={`${title} demo`}
          layout="responsive"
          width={2}
          height={1}
        />
      </div>

      <h2 className="my-4">{title}</h2>
      <div>
        {tags.map((tag) => (
          <Tag key={tag} content={tag} />
        ))}
      </div>

      <div className="mt-2 underline">
        <div className="mr-2 inline-block">Visit</div>
        <a href={repoLink} className="mr-2 hover:text-primary">
          Repository
        </a>
        <a href={demoLink} className="mr-2 hover:text-primary">
          Live Demo
        </a>
      </div>

      <p className="mt-6 mb-12 text-greyDark dark:text-grey">{description}</p>
    </article>
  );
};

export default SingleProject;
