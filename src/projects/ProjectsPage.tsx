import { Fragment } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import { Project } from "./Project";
import { ProjectList } from "./ProjectsList";

function ProjectsPage() {
  const saveProject = (project: Project) => console.log('Saving project ', project);

  return (
    <Fragment>
      <h1>Projects</h1>
      <ProjectList onSave={saveProject} projects={MOCK_PROJECTS}></ProjectList>
    </Fragment>
  );
}

export default ProjectsPage;