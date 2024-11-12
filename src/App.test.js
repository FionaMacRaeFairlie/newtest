import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";


import App from "./App";
import Account from './components/Account';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import Textinput from './components/Textinput';
import TodoApp from './components/todo/Todoapp';

describe("App renders successfully", () => {
  it("renders App component", () => {
    render(<App />);
  });
});

describe("Checks the heading of the document", () => {
  it("checks the value of the text heading", () => {
    const { getByText } = render(<App />);
    const textValue = getByText("Display Users");
    expect(textValue).toBeInTheDocument();
    // screen.debug();
  });
});

describe("<Account />", () => {
  const user = {
    name: "Smith David",
    email: "david@gmail.com",
    username: "Dave",
  };

  it("Account contains user details", () => {
    render(<Account user={user} />);
    const userName = screen.getByText(/Dav/);
    expect(userName).toBeInTheDocument;
  });
});

test("renders greeting correctly", () => {
  render(<Greeting name="John" />);
  const greetingText = screen.getByText(/hello, john/i);
  expect(greetingText).toBeInTheDocument();
});

describe("tests the button", () => {
  test("increments the count", () => {
    const { getByTestId } = render(<Counter />);
    const button = getByTestId("Button");
    expect(button.textContent).toBe("0");
    fireEvent.click(button);
    expect(button.textContent).toBe("1");
  });
});


describe("Textinput", () => {
  it("renders input text on screen correctly", () => {
    render(<Textinput />);
    expect(screen.queryByRole(<input />)).toBeNull();
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Fred" },
    });
    waitFor(() => expect(screen.getByText(/Fred/)).toBeInTheDocument());
  });
});

describe("Integration of Todo list components", () => {
  test("entering a todo in form adds a todo", async () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <TodoApp />
    );
    getByPlaceholderText("Enter todo text").value = "My new todo";
    fireEvent.click(getByText("Add"));
    await waitFor(() => getByText("My new todo"));
    expect(getByTestId("TodoForm-input").value).toEqual("");
    expect(getByText("My new todo")).toBeDefined();
  });
});
