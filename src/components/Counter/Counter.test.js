import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./index.js";

beforeAll(() => {
  console.log("test started beforeAll()");
});

beforeEach(() => {
  console.log("I run before each test");
});

afterEach(() => {
  console.log("I run after each test");
});

afterAll(() => {
  console.log("test finished afterAll()");
});

test("increase button", () => {
  render(<Counter />);

  const countElement = screen.getByText("0");
  const increaseBtn = screen.getByText(/increase/i);

  fireEvent.click(increaseBtn);
  expect(countElement).toHaveTextContent("1");
});

test("decrease button", () => {
  render(<Counter />);

  const countElement = screen.getByText("0");
  const decreaseBtn = screen.getByText(/decrease/i);

  fireEvent.click(decreaseBtn);
  expect(countElement).toHaveTextContent("-1");
});

// another way

/*
describe("Counter Tests", () => {
  let countElement;
  let increaseBtn;
  let decreaseBtn;

  beforeEach(() => {
    render(<Counter />);
    countElement = screen.getByText("0");
    increaseBtn = screen.getByText(/increase/i);
    decreaseBtn = screen.getByText(/decrease/i);
  });

  test("increase button", () => {
    fireEvent.click(increaseBtn);
    expect(countElement).toHaveTextContent("1");
  });

  test("decrease button", () => {
    fireEvent.click(decreaseBtn);
    expect(countElement).toHaveTextContent("-1");
  });
});
*/
