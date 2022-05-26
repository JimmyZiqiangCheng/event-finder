import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
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

const loginCredentials = {
  email: "user1@123.com",
  password: "abcd1234",
};

describe("MyHeader", () => {
  it("should have login and signup button when user is not logged in", async () => {
    renderWithContext(<MyHeader />);
    const buttonGroup = await screen.findByTestId("button-group");
    expect(buttonGroup).toBeInTheDocument();
  });
  it("should display login modal after clicking login button, and show user name after logging in", async () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    renderWithContext(<MyHeader />);
    const loginButton = await screen.findByText("Log In");
    fireEvent.click(loginButton);
    const loginModal = await screen.findByTestId("login-modal");
    expect(loginModal).toBeInTheDocument();
    const emailField = await screen.findByTestId("email");
    const passwordField = await screen.findByTestId("password");
    fireEvent.change(emailField, { target: { value: loginCredentials.email } });
    fireEvent.change(passwordField, {
      target: { value: loginCredentials.password },
    });
    const submitButton = await screen.findByTestId("submit-login");
    fireEvent.click(submitButton);
    const userName = await screen.findByText(loginCredentials.email);
    expect(userName).toBeInTheDocument();
  });
});
