import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { ThemeProvider, useTheme } from "./contexts/ThemeConstext";
import { TaskType } from "./types/types";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import FilterButtons from "./components/FilterButtons.tsx/FilterButtons";
import "./App.css";

const API_URL = process.env.REACT_APP_API_URL;

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");
  const { theme, toggleTheme } = useTheme();

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      response.data.sort((a: TaskType, b: TaskType) => a.id - b.id);
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = useCallback(async () => {
    if (inputValue.trim() === "") return;
    try {
      await axios.post(`${API_URL}/tasks`, {
        title: inputValue,
        completed: false,
      });
      fetchTasks();
      setInputValue("");
    } catch (error) {
      console.error("Failed to add task", error);
    }
  }, [inputValue]);

  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Failed to delete task", error);
    }
  };

  const toggleTaskCompletion = async (id: number) => {
    try {
      await axios.patch(`${API_URL}/tasks/${id}/complete`);
      fetchTasks();
    } catch (error) {
      console.error("Failed to toggle task completion", error);
    }
  };

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
