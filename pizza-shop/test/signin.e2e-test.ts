import { test, expect } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/signin', { waitUntil: 'networkidle' })

  await page.getByLabel('Your e-mail').fill('felipe@email.com')
  await page.getByRole('button', { name: 'Access Panel' }).click()

  const toast = page.getByText('We have sent an authentication link to your email!')

  await expect(toast).toBeVisible()
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/signin', { waitUntil: 'networkidle' })

  await page.getByLabel('Your e-mail').fill('wrong@email.com')
  await page.getByRole('button', { name: 'Access Panel' }).click()

  const toast = page.getByText('Credentials does not match')

  await expect(toast).toBeVisible()
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/signin', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'New establishment' }).click()

  expect(page.url()).toContain('/signup')
})
