import { useState } from "react";
import LandingPage from "./components/LandingPage";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

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

  let content;
  if (projectState.selectedProject === null) {
    content = <NewProject onCancelNewProject={handleCancelAddProject} />;
  } else if (projectState.selectedProject === undefined) {
    content = <LandingPage onAddNewProject={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onAddNewProject={handleAddProject}
        projectDetail={projectState}
      />
      {content}
    </main>
  );
}

export default App;
