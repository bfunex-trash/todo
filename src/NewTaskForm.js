import { useState } from "react";
import styles from "./Task.module.css";

/**
 *
 * @param {{ onNewTask(task: string): void; }} props
 * @returns
 */
export function NewTaskForm({ onNewTask }) {
  const [newTask, setNewTask] = useState("");

  return (
    <form
      className={styles.task_form}
      onSubmit={(e) => {
        e.preventDefault();

        const task = newTask.trim();
        if (task === "") return;

        setNewTask("");
        onNewTask(task);
      }}
    >
      <input
        autoFocus={newTask === ""}
        name="task"
        type="text"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.currentTarget.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}
