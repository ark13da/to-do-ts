import React from "react";
import { TaskListProps } from "../../types/types";
import TaskItem from "../TaskItem/TaskItem";
import styles from "./Tasklist.module.css";

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleTaskCompletion,
  deleteTask,
}) => {
  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
