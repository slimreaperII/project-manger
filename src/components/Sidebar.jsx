export default function Sidebar({ onAdd, projectDetail }) {
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
        {projects.map((project, index) => (
          <li key={index}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-2 text-stone-200 hover:bg-stone-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
