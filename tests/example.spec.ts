import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200/')
})


test('datepicker', async ({page}) => {
  await page.getByText('Forms').click()
  await page.getByText('Datepicker').click()
  
})