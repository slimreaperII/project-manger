export default function Sidebar({ onAddNewProject }) {
  return (
    <aside className="bg-stone-900 text-stone-50 w-1/3 px-8 py-16 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase md:text-xl font-bold text-stone-200">
        Your Projects
      </h2>
      <button
        className="bg-stone-700 px-4 py-2 text-xs text-stone-200 rounded-lg md:text-base hover:bg-stone-600 hover:text-stone-100"
        onClick={onAddNewProject}
      >
        + Add Projects
      </button>
    </aside>
  );
}
