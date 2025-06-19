import { test, expect } from '@playwright/test';

test.describe('Login no painel admin do Strapi', () => {
  test('Deve realizar login com Super Admin', async ({ page }) => {
    await page.goto('http://localhost:1337/admin');

    // Preenche campos de login
    await page.fill('input[name="email"]', 'admin@satc.edu.br');
    await page.fill('input[name="password"]', 'welcomeToStrapi123');

    // Clica no botão de login
    await page.click('button[type="submit"]');

    // Aguarda redirecionamento para o painel
    await expect(page).toHaveURL(/\/admin\/?/);

    // Verifica se o painel carregou com sucesso
    await expect(page.getByText('Content Manager')).toBeVisible();
  });
});
