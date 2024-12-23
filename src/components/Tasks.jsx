import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.title);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <Button
            className={`bg-slate-400  text-left text-white p-2 rounded-md w-full ${
              tasks.isCompleted && "line-through"
            }`}
            onClick={() => {
              onTaskClick(tasks.id);
            }}
          >
            {tasks.title}
          </Button>
          <Button
            className="bg-slate-400 p-2 rounded-md text-white"
            onClick={() => onSeeDetailsClick(tasks)}
          >
            <ChevronRightIcon />
          </Button>
          <Button
            className="bg-slate-400 p-2 rounded-md text-white"
            onClick={() => onDeleteTaskClick(tasks.id)}
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
