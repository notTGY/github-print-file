import { test, expect } from '../fixtures/chrome-extension'

const markdownFile = 'notTGY/github-print-file/blob/main/README.md'

const buttonTestId = 'github-print-button'
const labelText = 'Print content'
const labelSelector = `[aria-label="${labelText}"][role=tooltip]`

test('button', async ({ page }) => {
  await page.goto(markdownFile)
  const button = page.getByTestId(buttonTestId)
  await expect(button).toBeVisible()
  await expect(page.locator(
    '#repos-sticky-header>:first-child')
  ).toHaveScreenshot()
})

test('label', async ({ page }) => {
  await page.goto(markdownFile)
  const button = page.getByTestId(buttonTestId)
  await button.focus()
  const label = page.locator(labelSelector)
  const content = await label.evaluate(el =>
    window.getComputedStyle(
      el, ':after'
    ).content
  )
  await expect(content).toEqual(
    expect.stringContaining(labelText)
  )
})

test('Print styles', async ({ page }) => {
  await page.goto(markdownFile)
  await page.emulateMedia({ media: 'print' })
  await expect(page.locator('section')).toBeVisible()
  await expect(page.locator('body')).toHaveScreenshot()
})
