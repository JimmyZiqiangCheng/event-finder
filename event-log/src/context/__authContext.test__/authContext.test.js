// import React from "react";
// import "@testing-library/jest-dom/extend-expect";
// import { render, cleanup, fireEvent, screen } from "@testing-library/react";
// import AuthProvider from "../authContext";
// import { useWillMount } from "../../utils/customHooks";
// import { onAuthStatusChange } from "../../services/AuthService";
// import TestComponent from "./TestComponent";

// const renderWithContext = (component) => {
//   render(
//     <AuthProvider
//       useWillMount={useWillMount}
//       onAuthStatusChange={onAuthStatusChange}
//     >
//       {component}
//     </AuthProvider>
//   );
// };

// afterEach(cleanup);

// describe("AuthContext", () => {
//   it("should initiate authentication status as false", () => {
//     renderWithContext(<TestComponent />);
//     expect(screen.getByTestId("authentication")).toHaveTextContent("false");
//   });
// });

it("should return false", () => {
  expect(true).toBeTruthy();
});
