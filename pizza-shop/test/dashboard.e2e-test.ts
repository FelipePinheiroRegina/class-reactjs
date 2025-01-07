import { test, expect } from '@playwright/test'

test('display total revenue month metrics', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    expect(page.getByText('R$ 500,00')).toBeVisible()
    expect(page.getByText('+3% compared to last month')).toBeVisible()
})

test('display month orders amount metrics', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    expect(page.getByText('200')).toBeVisible()
    expect(page.getByText('+7% compared to last month')).toBeVisible()
})

test('display day orders amount metrics', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    expect(page.getByText('20', { exact: true })).toBeVisible()
    expect(page.getByText('-7% compared to yesterday')).toBeVisible()
})

test('display canceled orders amount month metrics', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })

    expect(page.getByText('5', { exact: true })).toBeVisible()
    expect(page.getByText('-5% compared to last month')).toBeVisible()
})