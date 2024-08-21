import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterButtons from "./FilterButtons";

describe("FilterButtons component", () => {
  test("renders filter buttons correctly", () => {
    render(<FilterButtons filter="all" setFilter={jest.fn()} />);

    expect(screen.getByText(/all/i)).toBeInTheDocument();
    expect(screen.getByText(/completed/i)).toBeInTheDocument();
    expect(screen.getByText(/incomplete/i)).toBeInTheDocument();
  });

  test("invokes setFilter on button click", () => {
    const setFilter = jest.fn();
    render(<FilterButtons filter="all" setFilter={setFilter} />);

    fireEvent.click(screen.getByText(/completed/i));
    expect(setFilter).toHaveBeenCalledWith("completed");
  });
});
