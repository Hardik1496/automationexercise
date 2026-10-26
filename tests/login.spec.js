import { expect,test } from "@playwright/test";


test('Verify login', async ({ page }) => {
await page.goto('https://automationexercise.com/');
await page.getByText('Signup / Login').click();
});