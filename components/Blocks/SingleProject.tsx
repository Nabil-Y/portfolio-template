import { Project } from "../../types/types";
import Image from "next/image";

const SingleProject = (props: Project) => {
  const { repoLink, demoLink, title, description, tags, imgLink } = props;
  return (
    <article>
      <Image
        src={imgLink}
        alt={`${title} demo`}
        layout="responsive"
        width={2}
        height={1}
      />
      <h2>{title}</h2>
      {tags.map((tag) => (
        <div key={tag}>{tag}</div>
      ))}
      <a href={repoLink}>Repository</a>
      <a href={demoLink}>Live Demo</a>
      <p>{description}</p>
    </article>
  );
};

export default SingleProject;
