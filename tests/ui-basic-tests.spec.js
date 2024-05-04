const { test, expect } = require('@playwright/test');

test('new test', async ({ browser }) => {
    // Open browser
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Google/);

    await page.getByRole('button', { name: 'Rechazar todo' }).click();
    await page.getByLabel('Buscar', { exact: true }).click();
    await page.getByLabel('Buscar', { exact: true }).fill('hola');
  });