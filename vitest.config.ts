import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    test: {
        setupFiles: ["src/__tests__/setup.ts"],
        coverage: {
            provider: "istanbul",
        },
        globals: true,
        environment: "jsdom",
    },
});