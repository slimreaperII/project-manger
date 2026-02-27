import logo from "../assets/no-projects.png";

export default function LandingPage({ onAddNewProject, projectDetail }) {
  return (
    <div className="flex-1 flex-col justify-items-center mt-24">
      <img
        src={logo}
        alt="projects-logo"
        className="w-16 h-16 object-contain"
      />
      <h2 className="text-xl font-bold text-stone-500 my4">
        No Projects Selected
      </h2>
      <p className="text-stone-500 mb-4">
        Select a project or get started with a new one
      </p>
      <div className="mt-8">
        <button
          className="bg-stone-800 text-stone-200 hover:bg-stone-950 px-6 py-2 rounded-md font-bold"
          onClick={onAddNewProject}
        >
          create new project
        </button>
      </div>
    </div>
  );
}
