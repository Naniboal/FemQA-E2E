const { test, expect } = require('@playwright/test');

test('Verificación de contenido en la página principal', async ({ page }) => {
  // Navegar a la página principal
  await page.goto('https://femqa.basetis.com/es');

  // Verificar que el subtítulo esté visible
  await expect(page.locator('p:has-text("Impulsamos el empoderamiento femenino")').first()).toBeVisible();

  // Verificar que el botón de "Contact" esté visible y funcione
  await expect(page.locator('button:has-text("Contact")')).toBeVisible();
  await page.click('button:has-text("Contact")');
  
  // Verificar que después de hacer clic estamos en la página correcta
  await expect(page).toHaveURL('https://femqa.basetis.com/es/about');
});