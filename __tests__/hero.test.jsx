import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero Component", () => {
  test("renders the hero text correctly", () => {
    render(<Hero />);

    // Check if the hero name is present in the component
    const heroName = screen.getByText(/Hi, I'm Sujan/i); // Use a regular expression to match case-insensitively
    expect(heroName).toBeInTheDocument();

    // Check if the hero subtext is present in the component
    const heroSubtext = screen.getByText(/I develop user interfaces and web applications/i); // Use a regular expression
    expect(heroSubtext).toBeInTheDocument();
  });
});
