import { act, fireEvent, renderHook } from "@testing-library/react";
import { useInfiniteScrolling } from "hooks";

describe("useInfiniteScrolling Hooks", () => {
    it("should be increase the number of visible items when on scroll", async () => {
        const { result } = renderHook(() => useInfiniteScrolling())
        act(() => fireEvent.scroll(window, { target: { scrollY: 1000 } }))
        expect(result.current.visibleItemCount).toBeGreaterThan(10)
    });
});
