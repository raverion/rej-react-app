import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  // const pElement = screen.getByText(/React To-do App/i);
  expect(linkElement).toBeInTheDocument();
  // expect(pElement).toBeInTheDocument();
});
