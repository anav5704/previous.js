import { expect, test } from "@playwright/test"

test("has title", async ({ page }) => {
    await page.goto("/")
    expect(await page.locator("h1").innerText()).toContain("Welcome")
})

test("has navbar", async ({ page }) => {
    await page.goto("/")
    expect(await page.locator("nav").innerText()).toContain("Shared nav component")
})
