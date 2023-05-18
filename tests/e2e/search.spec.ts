import { expect, test } from "@playwright/test";

test("Should be able to search the recipes", async ({ page }) => {
  /** Navigate to web */
  await page.goto("http://localhost:3000/");

  /** should be able to open up the website */
  await expect(
    page.getByRole("heading", { name: "Wasssup guys, Cari Resepi" })
  ).toBeVisible();

  /** click on the search box */
  await page.getByRole("textbox").click();

  /** type "Lontong" in the search box */
  await page.getByRole("textbox").fill("Lontong");

  /** should be able to see the search result */
  await expect(page.getByText("Lontong Kuah Lodeh")).toBeVisible();

  /** click on the search result */
  await page.getByRole("img", { name: "Lontong Kuah Lodeh" }).click();
});
