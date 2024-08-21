import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ThemedApp from "./App";
import "@testing-library/jest-dom";

describe("App integration tests", () => {
  test("adds a new task", () => {
    render(<ThemedApp />);

    fireEvent.change(screen.getByPlaceholderText(/add a new task/i), {
      target: { value: "New Task" },
    });
    fireEvent.click(screen.getByRole("button", { name: /add task/i }));

    expect(screen.getByText(/new task/i)).toBeInTheDocument();
  });

  test("toggles task completion", () => {
    render(<ThemedApp />);

    fireEvent.change(screen.getByPlaceholderText(/add a new task/i), {
      target: { value: "Task to Complete" },
    });
    fireEvent.click(screen.getByRole("button", { name: /add task/i }));

    const task = screen.getByText(/task to complete/i);
    fireEvent.click(task);

    expect(task).toHaveClass("completed");
  });

  test("removes a task", () => {
    render(<ThemedApp />);

    fireEvent.change(screen.getByPlaceholderText(/add a new task/i), {
      target: { value: "Task to Remove" },
    });
    fireEvent.click(screen.getByRole("button", { name: /add task/i }));

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Task to Remove/i)).not.toBeInTheDocument();
  });

  test("filters tasks", () => {
    render(<ThemedApp />);

    fireEvent.change(screen.getByPlaceholderText(/add a new task/i), {
      target: { value: "Incomplete Task" },
    });
    fireEvent.click(screen.getByRole("button", { name: /add task/i }));

    fireEvent.change(screen.getByPlaceholderText(/add a new task/i), {
      target: { value: "Completed Task" },
    });
    fireEvent.click(screen.getByRole("button", { name: /add task/i }));

    const completedTask = screen.getByText(/completed task/i);
    fireEvent.click(completedTask);

    fireEvent.click(screen.getByRole("button", { name: /completed/i }));
    expect(screen.getByText(/completed task/i)).toBeInTheDocument();
    expect(screen.queryByText(/incomplete task/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /incomplete/i }));
    expect(screen.getByText(/incomplete task/i)).toBeInTheDocument();
    expect(screen.queryByText(/completed task/i)).not.toBeInTheDocument();
  });

  test("toggle theme", () => {
    render(<ThemedApp />);

    const appElement = screen
      .getByRole("heading", { name: /to-do list/i })
      .closest("div");
    const toggleButton = screen.getByText(/toggle theme/i);

    expect(appElement).toHaveClass("app light");

    fireEvent.click(toggleButton);
    expect(appElement).toHaveClass("app dark");

    fireEvent.click(toggleButton);
    expect(appElement).toHaveClass("app light");
  });
});
