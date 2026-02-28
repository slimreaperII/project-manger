export default function ProjectDetailCard({ projectDetail, onDelete }) {
  const formattedDate = new Date(projectDetail.dueDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  );
  return (
    <div className="w-[35rem] mt-6">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-stone-700">
            {projectDetail.title}
          </h1>
          <button
            className="text-stone-800 hover:text-stone-950 font-bold"
            onClick={() => {
              onDelete(projectDetail.title);
            }}
          >
            Delete
          </button>
        </div>
        <p className="mb-6 text-stone-500">{formattedDate}</p>
        <p className="text-stone-00 whitespace-pre-wrap">
          {projectDetail.description}
        </p>
      </header>
      TASKS
    </div>
  );
}
