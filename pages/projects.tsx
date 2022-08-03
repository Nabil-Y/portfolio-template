import { useState } from "react";
import BaseContainer from "../components/Layouts/BaseContainer";
import SearchInput from "../components/Inputs/SearchInput";
import { projectsData } from "../data/projects/projectsData";
import SingleProject from "../components/Blocks/SingleProject";

const ProjectsPage = () => {
  const [query, setQuery] = useState("");

  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(query.toLowerCase()) ||
      project.description.toLowerCase().includes(query.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(query.toLowerCase())
      )
  );

  return (
    <BaseContainer
      title="Projects - Nabil Yassine"
      description="Have a look at all my frontend web dev projects"
    >
      <h1>Projects</h1>

      <SearchInput
        name="search-project"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
      />

      {filteredProjects.map((project) => (
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
