import React from "react";
import TestComponent from "./TestComponent";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen } from "@testing-library/react";
afterEach(cleanup);
describe("displayAvatar", () => {
  it("should display an Avatar of default user outline if no url is given", () => {
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
    render(<TestComponent url={null} />);
    const defaultAvatar = screen.getByTestId("avatar-default");
    expect(defaultAvatar).toBeInTheDocument();
  });

  it("should display an Avatar with the given url if url is given", () => {
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
    render(<TestComponent url={"www.myavatar.com/1"} />);
    const urlAvatar = screen.getByTestId("avatar-url");
    expect(urlAvatar).toBeInTheDocument();
  });
});
