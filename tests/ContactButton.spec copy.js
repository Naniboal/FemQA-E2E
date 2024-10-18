// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://femqa.basetis.com/es');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/FemQA/);
});



test('submit contact form', async ({ page }) => {
  await page.goto('https://femqa.basetis.com/es');

  // Click on the "Contact" button
  await page.click('button:has-text("Contact")');

  // Ensure the contact form is visible
  const contactForm = page.locator('form#General');
  await expect(contactForm).toBeVisible();

  // Fill in the form fields with Nombre, Apellido, Correo, and Mensaje
  await page.fill('input[name="Nombre"]', 'Anna');
  await page.fill('input[name="Apellido"]', 'Test');
  await page.fill('input[name="Correo"]', 'anna@example.com');
  await page.fill('textarea[name="Mensaje"]', 'test');

  // Submit the form
  await page.click('button:has-text("Enviar")');

});


