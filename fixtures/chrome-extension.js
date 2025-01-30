import { test as base, chromium } from '@playwright/test'
import { fileURLToPath } from 'node:url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const headless = true

export const test = base.extend({
  context: async ({}, use) => {
    const pathToExtension = path.join(__dirname, '..')
    const context = await chromium.launchPersistentContext('', {
      channel: 'chromium',
      headless,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    })
    await use(context)
    await context.close()
  },
})
export const expect = test.expect
