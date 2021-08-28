import { Task } from "./Task";
import styles from "./Task.module.css";

/**
 * @typedef {{ done: boolean, description: string }} Task
 * @param {{
 *  tasks: Task[];
 *  onToggle(index: number): void;
 *  onDelete(index: number): void;
 * }} props
 */
export function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul className={styles.task_list}>
      {tasks.map((task, index) => (
        <Task
          key={index}
          done={task.done}
          description={task.description}
          onToggle={() => onToggle(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
}
