export default function Sidebar({ onAdd, projectDetail, onSelect }) {
  const { selectedProject, projects } = projectDetail;

  return (
    <aside className="bg-stone-900 text-stone-50 w-1/3 px-8 py-16 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase md:text-xl font-bold text-stone-200">
        Your Projects
      </h2>
      <button
        className="bg-stone-700 px-4 py-2 text-xs text-stone-200 rounded-lg md:text-base hover:bg-stone-600 hover:text-stone-100"
        onClick={onAdd}
      >
        + Add Projects
      </button>
      <ul className="mt-6">
        {projects.map((project, index) => {
          let btnStyle =
            "w-full text-left px-2 py-1 rounded-md my-2 hover:bg-stone-800";

          if (project.title === selectedProject) {
            btnStyle += " bg-stone-800 text-stone-200";
          } else {
            btnStyle += " text-stone-400";
          }

          return (
            <li key={index}>
              <button
                className={btnStyle}
                onClick={() => {
                  onSelect(project.title);
                }}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
