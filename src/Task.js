import styles from "./Task.module.css";

/**
 * @param {{
 *    done: boolean;
 *    description: string;
 *    onToggle(): void;
 *    onDelete(): void;
 * }} props
 */
export function Task({ done, description, onToggle, onDelete }) {
  return (
    <li>
      <label className={styles.task + " " + (done ? styles.done : "")}>
        <input type="checkbox" checked={done} onChange={onToggle} />
        <span>{description}</span>
        <button type="button" onClick={onDelete}>
          &times;
        </button>
      </label>
    </li>
  );
}
