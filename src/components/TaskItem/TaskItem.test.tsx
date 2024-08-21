import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "./TaskItem";

const mockTask = {
  id: 1,
  text: "Test Task",
  completed: false,
};

describe("TaskItem Component", () => {
  test("renders task test correctly", () => {
    render(
      <TaskItem
        task={mockTask}
        toggleTaskCompletion={jest.fn()}
        deleteTask={jest.fn()}
      />
    );

    expect(screen.getByText(/test task/i)).toBeInTheDocument();
  });

  test("invokes toggleTaskCompletion on task text click", () => {
    const toggleTaskCompletion = jest.fn();
    render(
      <TaskItem
        task={mockTask}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={jest.fn()}
      />
    );

    fireEvent.click(screen.getByText(/test task/i));
    expect(toggleTaskCompletion).toHaveBeenCalledWith(1);
  });

  test("invokes deleteTask on button click", () => {
    const deleteTask = jest.fn();
    render(
      <TaskItem
        task={mockTask}
        toggleTaskCompletion={jest.fn()}
        deleteTask={deleteTask}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /delete/i }));
    expect(deleteTask).toHaveBeenCalledWith(1);
  });
});
