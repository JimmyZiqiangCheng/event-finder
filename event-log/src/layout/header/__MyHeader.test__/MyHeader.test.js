import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen } from "@testing-library/react";
import MyHeader from "../MyHeader";
import axios from "axios";
import ThemeProvider from "../../../context/themeContext";
import AuthProvider from "../../../context/authContext";

afterEach(cleanup);

const renderWithContext = (component) => {
  render(
    <AuthProvider>
      <ThemeProvider>{component}</ThemeProvider>
    </AuthProvider>
  );
};

describe("MyHeader", () => {
  it("should have login and signup button when user is not logged in", async () => {
    renderWithContext(<MyHeader />);
    const buttonGroup = await screen.findByTestId("button-group");
    expect(buttonGroup).toBeInTheDocument();
  });
  // it("should have the user name displayed after user logged in", () => {
  //   renderWithContext(<MyHeader />);
  //
  // })
});
