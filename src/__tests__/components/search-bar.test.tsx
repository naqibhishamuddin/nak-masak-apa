import {
  act,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "components";
import { useSearchBar } from "components/search-bar/useSearchBar";

describe("Search Bar Component", () => {
  beforeEach(() => render(<SearchBar />));

  it("should able to render correctly", () => {
    expect(screen.getByLabelText("search")).toBeInTheDocument();
  });

  it("should be able to enter search value", async () => {
    const searchInput = screen.getByRole("textbox");
    await userEvent.type(searchInput, "Ayam masak merah");
    waitFor(() => expect(vi.fn()).toBeCalled());
  });

  describe("useSearchBar Hooks", () => {
    let searchHooks: ReturnType<typeof useSearchBar>;

    beforeEach(() => {
      const hooks = renderHook(() => useSearchBar(vi.fn()));
      searchHooks = hooks.result.current;
    });

    it("should update placeholder visibility on focus", async () => {
      const { onFocus, isPlaceholderVisible } = searchHooks;
      act(() => onFocus());
      waitFor(() => expect(isPlaceholderVisible).toBeFalsy());
    });

    it("should update search value during onChange", async () => {
      const { onChangeText } = searchHooks;
      act(() => onChangeText("Ayam masak merah"));
      waitFor(() => expect(vi.fn()).toBeCalled());
    });

    it("should update placeholder visibility on blur if search value is empty", async () => {
      const { isPlaceholderVisible, onBlur } = searchHooks;
      act(() => onBlur());
      waitFor(() => expect(isPlaceholderVisible).toBeTruthy());
    });
  });
});
