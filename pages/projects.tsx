import { useState } from "react";
import BaseContainer from "../components/Layouts/BaseContainer";
import SearchInput from "../components/Inputs/SearchInput";

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

      <p className="">
        Get started by editing <code>pages/index.tsx</code>
      </p>
    </BaseContainer>
  );
};

export default ProjectsPage;
