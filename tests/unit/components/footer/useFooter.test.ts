import { act, renderHook, waitFor } from "@testing-library/react";
import { useFooter } from "components/footer/useFooter";

describe("useFooter", () => {
  it("should not navigate on empty parameter", async () => {
    const { result } = renderHook(() => useFooter());
    act(() => result.current.onClickContact(""));
    await waitFor(() => expect(global.open).not.toBeCalled());
  });
});
