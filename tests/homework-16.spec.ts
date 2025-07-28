import * as dotenv from 'dotenv'
dotenv.config();
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
const randUsername= faker.internet.username();
const randPassword= faker.internet.password();

test('Test checks if the Sign-in button is enabled', async ({ page }) => {
  if (!process.env.APP_URL) throw new Error('APP_URL is not defined');
  await page.goto(process.env.APP_URL);
  await page.getByTestId('username-input').fill(randUsername);
  await page.getByTestId(`password-input`).fill(randPassword);
  await expect(page.getByTestId(`signIn-button`)).toBeEnabled();
});
test('Test checks when authorization fails with incorrect credentials ', async ({ page }) => {
  if (!process.env.APP_URL) throw new Error('APP_URL is not defined');
  await page.goto(process.env.APP_URL);
  await page.getByTestId('username-input').fill(randUsername);
  await page.getByTestId(`password-input`).fill(randPassword);
  await page.getByTestId(`signIn-button`).click();
  await expect(page.getByTestId(`authorizationError-popup`)).toBeVisible();
})