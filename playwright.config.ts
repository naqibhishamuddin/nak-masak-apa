import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    screenshot: process.env.CI ? "off" : "on",
    video: process.env.CI ? "off" : "on",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Chrome Desktop",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },

    {
      name: "Firefox Desktop",
      use: { ...devices["Desktop Firefox"], channel: "firefox" },
    },

    {
      name: "Safari Desktop",
      use: { ...devices["Desktop Safari"], browserName: "webkit" },
    },

    {
      name: "Microsoft Edge Desktop",
      use: { ...devices["Desktop"], channel: "msedge" },
    },

    {
      name: "Chrome Mobile",
      use: { ...devices["iPhone 13 Pro Max"], browserName: "chromium" },
    },
    {
      name: "Safari Mobile",
      use: { ...devices["iPhone 13 Pro Max"], browserName: "webkit" },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000/",
    reuseExistingServer: !process.env.CI,
  },
});
