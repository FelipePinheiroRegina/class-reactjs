import { test, expect } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/signin', { waitUntil: 'networkidle' })

  await page.getByLabel('Your e-mail').fill('felipe@email.com')
  await page.getByRole('button', { name: 'Access Panel' }).click()

  const toast = page.getByText('We have sent an authentication link to your email!')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})
