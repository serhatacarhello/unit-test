// Todo.test.js

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./index";

it("renders default todos", () => {
  render(<Todo />);

  expect(screen.getByText("Travel Poland")).toBeInTheDocument();
  expect(screen.getByText("Learn Typescript")).toBeInTheDocument();
  expect(screen.getByText("Learn React-Redux")).toBeInTheDocument();
  expect(screen.getByText("Learn Phyton")).toBeInTheDocument();
});

describe("Todo", () => {
  it("renders add button and input", () => {
    // render component
    render(<Todo />);

    // get elements
    const input = screen.getByLabelText(/enter a new todo/i);
    const addBtn = screen.getByText("Add");

    // assertions
    expect(addBtn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("adds a new todo", async () => {
    render(<Todo />);

    const input = screen.getByLabelText(/enter a new todo/i);
    const addBtn = screen.getByText("Add");

    const name = "TODO TEST";
    userEvent.type(input, name);
    userEvent.click(addBtn);

    await waitFor(() => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
