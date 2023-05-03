import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

/** Mock global object */
global.open = vi.fn();
