import { render, screen } from "@testing-library/react";
import { RecipeList } from "components";

describe("Recipe List Component", () => {
  it("should able to render correctly", () => {
    render(<RecipeList />);
    expect(screen.getByText("Kek Coklat Kukus")).toBeInTheDocument();
  });

  it("should able to render results correctly", () => {
    render(<RecipeList searchValue="Cadbury Tart" />);
    expect(screen.getByText("Cadbury Tart")).toBeInTheDocument();
  });

  it("should able to render empty page", () => {
    render(<RecipeList searchValue="Nasi Ayam Goreng Cendawan" />);
    expect(screen.getByText("Tiada Resepi Ditemui")).toBeInTheDocument();
  });
});
