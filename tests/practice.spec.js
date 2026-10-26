import { test, expect } from '@playwright/test';

test('Verify Get started link is visible', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    const getStartedLink = page.getByRole('link', {
        name: 'Get started'
    });

    await expect(getStartedLink).toBeVisible();

});