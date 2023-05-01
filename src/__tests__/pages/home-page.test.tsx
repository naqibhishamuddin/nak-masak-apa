import { render, screen, waitFor } from "@testing-library/react";
import Home from "pages";

describe("Home page", () => {
  it("should able to render correctly", () => {
    render(<Home />);
    expect(screen.getByText("2023 Edition")).toBeInTheDocument();
  });
});
