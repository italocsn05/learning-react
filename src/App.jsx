import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import Title from "./components/Title";

export default function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {method: 'GET'})
      const data = await response.json()
      console.log(data)
      setTasks(data)
    }
    fetchData()
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center">
      <div className="w=[500px] space-y-4">
        <Title className="text-3xl text-slate-100 font-bold text-center">
          Task Manager
        </Title>
        <AddTask
          onAddTaskSubmit={onAddTaskSubmit} 
        />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}
