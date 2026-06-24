import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200/')
})


test('datepicker', async ({page}) => {
  await page.getByText('Forms').click()
  await page.getByText('Datepicker').click()

  const calendarInputField = page.getByPlaceholder('Form Picker')
  await calendarInputField.click()

  let date = new Date()
  date.setDate(date.getDate() + 1)
  const expectedDate = date.getDate().toString()
  const expectedMonthShot = date.toLocaleString('En-US', {month: 'short'})
  const expectedYear = date.getFullYear()
  const dateToAssert = `${expectedMonthShot}`


  await page.locator('[class="day-cell ng-star-inserted"]').getByText('1', {exact: true}).click()
  await expect(calendarInputField).toHaveValue('Jun 21, 2023')

})