# Unit Testing with React Testing Library

This project contains unit tests for React components using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## Getting Started

To run the tests:

```
npm test
```

This will execute the test scripts defined in `package.json`.

## Writing Tests

For each component, create a `ComponentName.test.js` file in the same folder.

```jsx
// Button.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button with correct text", () => {
  render(<Button text="Submit" />);
  expect(screen.getByText("Submit")).toBeInTheDocument();
});
```

Main RTL methods:

- `render` - render a React component
- `screen` - query rendered components
- `getUserEvent` - simulate user interactions

Main expectations:

- `toBeInTheDocument` - assert element is rendered
- `toHaveTextContent` - assert element text
- `toBeDisabled` - assert element is disabled

## Matchers

Use semantic matchers to query elements:

- `getByText` - get by text content
- `getByLabelText` - get by label text
- `getByPlaceholderText` - get by placeholder
- `getByTestId` - get by test id attribute

This makes tests accessible and maintains separation from component implementation.

## Mocking

Mock any data, third-party modules, etc needed for the test:

```js
jest.mock("./api");

test("calls API", () => {
  // mock API implementation
});
```

## Resources

- [RTL Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [RTL Examples](https://github.com/testing-library/react-testing-library#examples)
- [Mocking in Jest](https://jestjs.io/docs/mock-functions)

Let me know if you would like any clarification or have additional questions!
