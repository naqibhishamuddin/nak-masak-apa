import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecipeCard } from "components";
import { recipes } from "components/recipe-list/recipes";

describe("Recipe Card Component", () => {
  const cardTitle = "Popia Simpul & Popia Seaweed";

  beforeEach(() => {
    render(<RecipeCard {...recipes[0]} />);
  });

  it("should able to render correctly", () => {
    expect(screen.getByText(cardTitle)).toBeInTheDocument();
  });

  it("should be able to click on the recipe card", async () => {
    await userEvent.click(screen.getByText(cardTitle));
    waitFor(() => expect(vi.fn()).toBeCalled());
  });
});
