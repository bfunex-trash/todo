import { useState, useEffect } from "react";
import { NewTaskForm } from "./NewTaskForm";
import { TaskList } from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) setTasks(tasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <NewTaskForm
        onNewTask={(task) => {
          setTasks([...tasks, { done: false, description: task }]);
        }}
      />
      <TaskList
        tasks={tasks}
        onToggle={(index) => {
          const newTasks = [...tasks];
          newTasks[index].done = !newTasks[index].done;
          setTasks(newTasks);
        }}
        onDelete={(index) => {
          const newTasks = [...tasks];
          newTasks.splice(index, 1);
          setTasks(newTasks);
        }}
      />
    </>
  );
}

export default App;
