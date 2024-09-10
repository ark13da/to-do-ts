import React from "react";
import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

const mockTasks = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
];

describe("TaskList component", () => {
  test("renders all task items correctly", () => {
    render(
      <TaskList
        tasks={mockTasks}
        toggleTaskCompletion={jest.fn()}
        deleteTask={jest.fn()}
      />
    );

    expect(screen.getByText(/task 1/i)).toBeInTheDocument();
    expect(screen.getByText(/task 2/i)).toBeInTheDocument();
  });
});
