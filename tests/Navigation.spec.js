const { test, expect } = require('@playwright/test');

test('Verificar el título y la navegación al contacto', async ({ page }) => {
  // Navegar a la página principal
  await page.goto('https://femqa.basetis.com/es');

  // Verificar que el título principal esté visible en la página principal
  await expect(page.locator('h1')).toHaveText('FemQA');

  // Verificar que el logo esté visible
  await expect(page.locator('img[alt="logo"]')).toBeVisible();

  // Verificar que el enlace "Contacto" está disponible
  await page.click('a[href="/es/contact"]');
  await expect(page).toHaveURL('https://femqa.basetis.com/es/contact');
});
