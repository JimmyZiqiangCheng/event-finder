import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import MyHeader from "../MyHeader";

describe("<MyHeader />", () => {
  it("should have login and signup button when user is not logged in", () => {
    render(<MyHeader />);
    expect("signin-button").toBeInTheDocument();
    expect("signup-button").toBeInTheDocument();
  });
  // it("should have the user name displayed after user logged in", () => {
  //   render(<MyHeader />);

  // })
});
