import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskInput from "./TaskInput";

describe("TaskInput component", () => {
  test("render input and button correctly", () => {
    render(
      <TaskInput inputValue="" setInputValue={jest.fn()} addTask={jest.fn()} />
    );

    expect(screen.getByPlaceholderText(/Add a new task/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Add task/i })
    ).toBeInTheDocument();
  });

  test("setInputValue is invoked on input change", () => {
    const setInputValue = jest.fn();
    render(
      <TaskInput
        inputValue=""
        setInputValue={setInputValue}
        addTask={jest.fn()}
      />
    );

    fireEvent.change(screen.getByPlaceholderText(/Add a new task/i), {
      target: { value: "New Task" },
    });
    expect(setInputValue).toBeCalledWith("New Task");
  });

  test("addTask is invoked by button click", () => {
    const addTask = jest.fn();
    render(
      <TaskInput inputValue="" setInputValue={jest.fn()} addTask={addTask} />
    );
    
    fireEvent.click(screen.getByRole("button", { name: /Add task/i }), {
      button: { name: /add task/i },
    });
    expect(addTask).toBeCalled();
  });
});
