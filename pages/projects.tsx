import { useState } from "react";
import BaseContainer from "../components/Layouts/BaseContainer";
import SearchInput from "../components/Inputs/SearchInput";
import { projects } from "../data/projects/projects";
import SingleProject from "../components/Blocks/SingleProject";

const ProjectsPage = () => {
  const [query, setQuery] = useState("");
  return (
    <BaseContainer>
      <h1>Projects</h1>

      <SearchInput
        name="search-project"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
      />

      {projects.map((project) => (
        <div key={project.title}>
          <SingleProject
            title={project.title}
            description={project.description}
            tags={project.tags}
            repoLink={project.repoLink}
            imgLink={project.imgLink}
            demoLink={project.demoLink}
          />
        </div>
      ))}
    </BaseContainer>
  );
};

export default ProjectsPage;
