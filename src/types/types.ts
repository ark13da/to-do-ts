import { PropsWithChildren } from "react";

export type TaskType = {
  id: number;
  title: string;
  completed: boolean;
};

export interface ThemeContextType extends PropsWithChildren {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export type TaskInputProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  addTask: () => void;
};

export type BaseType = {
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
};

export type TaskItemProps = BaseType & {
  task: TaskType;
};

export type TaskListProps = BaseType & {
  tasks: TaskType[];
};

export type FilterButtonProps = {
  filter: string;
  setFilter: (filter: string) => void;
};
