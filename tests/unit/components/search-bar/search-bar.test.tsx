import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "components";
import { act } from "react-dom/test-utils";

describe("Search Bar Component", () => {
  beforeEach(() => render(<SearchBar />));

  it("should able to render correctly", () => {
    expect(screen.getByLabelText("search")).toBeInTheDocument();
  });

  it("should be able to enter search value", async () => {
    const searchInput = screen.getByRole("textbox");
    await act(async () => {
      await userEvent.type(searchInput, "Ayam masak merah");
    });

    await waitFor(() =>
      expect(screen.getByDisplayValue("Ayam masak merah")).toBeInTheDocument()
    );
  });
});
