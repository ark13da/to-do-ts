import React, { useCallback, useState } from "react";
import { ThemeProvider, useTheme } from "./contexts/ThemeConstext";
import { TaskType } from "./types/types";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import FilterButtons from "./components/FilterButtons.tsx/FilterButtons";
import "./App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");
  const { theme, toggleTheme } = useTheme();

  const addTask = useCallback(() => {
    if (inputValue.trim() === "") return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    setInputValue("");
  }, [inputValue, tasks]);

  const deleteTask = useCallback(
    (id: number) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
    [tasks]
  );

  const toggleTaskCompletion = useCallback(
    (id: number) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    },
    [tasks]
  );

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className={`app ${theme}`}>
      <h1>To-Do List</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <TaskInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTask={addTask}
      />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
};

const ThemedApp: React.FC = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default ThemedApp;
