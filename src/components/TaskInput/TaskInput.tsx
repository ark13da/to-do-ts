import React, { useRef } from "react";
import { TaskInputProps } from "../../types/types";
import styles from "./TaskInput.module.css";

const TaskInput: React.FC<TaskInputProps> = ({
  inputValue,
  setInputValue,
  addTask,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTask = () => {
    addTask();
    inputRef.current?.focus();
  };

  return (
    <div className={styles.taskInputContainer}>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add task</button>
    </div>
  );
};

export default TaskInput;
