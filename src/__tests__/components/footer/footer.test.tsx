import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Footer } from "components";

const clickSocialButton = async (
  buttonName: "email" | "github" | "website"
) => {
  const socialButton = screen.getByRole("button", { name: buttonName });
  await act(async () => {
    await userEvent.click(socialButton);
  });
  await waitFor(() => {
    expect(global.open).toBeCalled();
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
