import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        name="#"
        id="#"
        placeholder="Task Title"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <Input
        type="text"
        name="#"
        id="#"
        placeholder="Task Description"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <button
        className="bg-slate-500 text-white px-4 py-4 rounded-md"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Please fill in all fields");
            return;
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default AddTask;
