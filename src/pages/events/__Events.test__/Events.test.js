import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen } from "@testing-library/react";
import Events from "../Events";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import AuthProvider from "../../../context/authContext";
import ThemeProvider from "../../../context/themeContext";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

jest.mock("axios");

const renderWithProvider = (component) => {
  render(
    <Router>
      <Provider store={store}>
        <AuthProvider>
          <ThemeProvider>{component}</ThemeProvider>
        </AuthProvider>
      </Provider>
    </Router>
  );
};

const events = {
  data: [
    {
      eventId: "1",
      title: "event1",
      category: "travel",
      city: "Toronto, Canada",
      description: "this is event1",
      rate: [{ rate: 5 }, { rate: 3 }],
      comments: [{}, {}],
    },
    {
      eventId: "2",
      title: "event2",
      category: "travel",
      city: "Toronto, Canada",
      description: "this is event2",
      rate: [{ rate: 5 }, { rate: 3 }],
      comments: [{}, {}],
    },
  ],
};

const hosts = {
  data: [
    {
      id: "1",
      eventId: "1",
      name: "Jimmy",
      email: "jimmy@123.com",
      photoURL: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: "2",
      eventId: "2",
      name: "Abby",
      email: "Abby@123.com",
      photoURL: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ],
};

describe("Events", () => {
  it("should display two events", async () => {
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
    axios.get.mockResolvedValueOnce(events);
    axios.get.mockResolvedValueOnce(hosts);
    renderWithProvider(<Events />);
    const results = await screen.findAllByTestId("row");
    expect(results.length).toBe(2);
  });
});
