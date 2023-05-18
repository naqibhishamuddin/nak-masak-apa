import { act, renderHook, waitFor } from "@testing-library/react";
import { useSearchBar } from "components/search-bar/useSearchBar";

describe("useSearchBar Hooks", () => {

    it("should update placeholder visibility on focus", async () => {
        const { result } = renderHook(() => useSearchBar(vi.fn()))
        act(() => result.current.onFocus());
        await waitFor(() => expect(result.current.isPlaceholderVisible).toBeFalsy());
    });

    it("should update search value during onChange", async () => {
        const onChange = vi.fn()
        const { result } = renderHook(() => useSearchBar(onChange))
        act(() => result.current.onChangeText("Ayam masak merah"));
        await waitFor(() => expect(onChange).toBeCalled())
    })

    it("should update placeholder visibility on blur if there is no query search", async () => {
        const { result } = renderHook(() => useSearchBar(vi.fn()))
        act(() => {
            result.current.onFocus()
            result.current.onBlur()
        });
        await waitFor(() => expect(result.current.isPlaceholderVisible).toBeTruthy());
    });


});