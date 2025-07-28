import { test, expect } from '@playwright/test';


test('get started link', async ({ page }) => {
  await page.goto('https://fe-delivery.tallinn-learning.ee/signin/');

});
