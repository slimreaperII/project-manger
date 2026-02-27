import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onCancel, onSave }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSaveClick() {
    const inputTitle = title.current.value;
    const inputDescription = description.current.value;
    const inputDueDate = dueDate.current.value;

    if (
      inputTitle.trim() === "" ||
      inputDescription.trim() === "" ||
      inputDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onSave({
      title: inputTitle,
      description: inputDescription,
      dueDate: inputDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal}>
        <h2 className="ext-xl font-bold text-stone-700 my4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid input.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            className="text-stone-700 hover:text-stone-950 px-6 py-2 hover:bg-stone-400 bg-stone-300 rounded-md"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-stone-800 text-stone-200 hover:bg-stone-950 px-6 py-2 rounded-md"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
