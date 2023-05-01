import { mockCustomHooks } from "./utils";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

/** Mock footer hooks */
mockCustomHooks("components/footer/useFooter", { onClickContact: vi.fn() });

/** Mock recipe card hooks */
mockCustomHooks("components/recipe-card/useRecipeCard", {
  onClickRecipe: vi.fn(),
});

/** Mock search bar hooks */
mockCustomHooks("components/search-bar/useSearchBar", {
  onChangeText: vi.fn(),
});

/** Mock global object */
global.open = vi.fn();
