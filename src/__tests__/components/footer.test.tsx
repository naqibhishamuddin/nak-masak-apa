import { render, renderHook, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Footer } from "components";
import { useFooter } from "components/footer/useFooter";

const clickSocialButton = async (
  buttonName: "github" | "email" | "website"
) => {
  const socialButton = screen.getByLabelText(buttonName);
  await userEvent.click(socialButton);
  waitFor(() => {
    expect(vi.fn()).toBeCalled();
  });
};

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("should able to render correctly", () => {
    expect(
      screen.getByText("©2023 Designed & Built by Naqib Hishamuddin")
    ).toBeInTheDocument();
  });

  it("should be able to click on the social button", () => {
    const { result } = renderHook(() => useFooter());
    result.current.onClickContact("");
    waitFor(() => {
      expect(vi.fn()).toBeCalled();
    });
  });

  describe("Contact Button", () => {
    it("should be able to click on github icon button", async () => {
      await clickSocialButton("github");
    });

    it("should be able to click on email icon button", async () => {
      await clickSocialButton("email");
    });

    it("should be able to click on website icon button", async () => {
      await clickSocialButton("website");
    });
  });
});
