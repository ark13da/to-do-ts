import React from "react";
import { TaskItemProps } from "../../types/types";
import styles from "./TaskItem.module.css";

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleTaskCompletion,
  deleteTask,
}) => {
  return (
    <li className={styles.taskItem}>
      <span
        className={task.completed ? styles.completed : ""}
        onClick={() => toggleTaskCompletion(task.id)}
      >
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
