import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "pages";

describe("Home page", () => {
  it("should able to render correctly", () => {
    render(<Home />);
    expect(screen.getByText("2023 Edition")).toBeInTheDocument();
  });

  it("should able to perform search", async () => {
    render(<Home />);
    await act(async () => {
      await userEvent.type(screen.getByRole("textbox"), "ayam");
    });

    await waitFor(() =>
      expect(screen.getByDisplayValue("ayam")).toBeInTheDocument()
    );
  });
});
