import { useState } from "react";
import LandingPage from "./components/LandingPage";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import ProjectDetailCard from "./components/ProjectDetailCard";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleSelectProject(title) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: title,
      };
    });
  }

  function handleAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }

  function handleSaveProject(newProject) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const selectedProjectDetail = projectState.projects.find(
    (project) => project.title === projectState.selectedProject,
  );
  let content = <ProjectDetailCard projectDetail={selectedProjectDetail} />;
  if (projectState.selectedProject === null) {
    content = (
      <NewProject
        onCancel={handleCancelAddProject}
        onSave={handleSaveProject}
      />
    );
  } else if (projectState.selectedProject === undefined) {
    content = <LandingPage onAdd={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onAdd={handleAddProject}
        projectDetail={projectState}
        onSelect={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
