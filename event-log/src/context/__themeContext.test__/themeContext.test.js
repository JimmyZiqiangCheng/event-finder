import React from "react";
import ThemeProvider from "../themeContext";
import "@testing-library/jest-dom/extend-expect";
import TestComponent from "./TestComponent";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";

const renderWithContext = (component) => {
  render(<ThemeProvider>{component}</ThemeProvider>);
};

afterEach(cleanup);

describe("ThemeContext", () => {
  it("should default to as false", () => {
    renderWithContext(<TestComponent />);
    expect(screen.getByTestId("collapsed")).toHaveTextContent("false");
  });
  it("should set to true after clicking toggle on", () => {
    renderWithContext(<TestComponent />);
    fireEvent.click(screen.getByTestId("toggleTrue"));
    expect(screen.getByTestId("collapsed")).toHaveTextContent("true");
  });
  it("should set to false after clicking toggle off", () => {
    renderWithContext(<TestComponent />);
    fireEvent.click(screen.getByTestId("toggleFalse"));
    expect(screen.getByTestId("collapsed")).toHaveTextContent("false");
  });
});
