import Link from "next/link";
import ProjectsPicture from "../../UI/Pictures/ProjectsPicture";
import SingleProject from "../SingleBlocks/SingleProject";
import { projectsData } from "../../../data/projects/projectsData";

const HomeProjects = () => {
  return (
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
  );
};

export default HomeProjects;
