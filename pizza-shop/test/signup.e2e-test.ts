import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
    await page.goto('/signup', { waitUntil: 'networkidle' })

    await page.getByLabel('Name of the establishment').fill('Pizza Shop')
    await page.getByLabel('Your name').fill('Felipe Pinheiro')
    await page.getByLabel('Your phone').fill('000000000')
    await page.getByLabel('Your e-mail').fill('felipe@email.com')

    await page.getByRole('button', { name: 'Finalize registration' }).click()

    const toast = page.getByText('Restaurant successfully registered!')

    expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
    await page.goto('/signup', { waitUntil: 'networkidle' })

    await page.getByLabel('Name of the establishment').fill('Invalid name')
    await page.getByLabel('Your name').fill('Felipe Pinheiro')
    await page.getByLabel('Your phone').fill('000000000')
    await page.getByLabel('Your e-mail').fill('felipe@email.com')

    await page.getByRole('button', { name: 'Finalize registration' }).click()

    const toast = page.getByText('Error registering restaurant')

    expect(toast).toBeVisible()
})