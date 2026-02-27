import Input from "./Input";

export default function NewProject({ onCancelNewProject }) {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          className="text-stone-700 hover:text-stone-950 px-6 py-2 hover:bg-stone-400 bg-stone-300 rounded-md"
          onClick={onCancelNewProject}
        >
          Cancel
        </button>
        <button className="bg-stone-800 text-stone-200 hover:bg-stone-950 px-6 py-2 rounded-md">
          Save
        </button>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
