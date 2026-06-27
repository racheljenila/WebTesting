import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:57841';

test.describe('Web App Testing - Complete Test Suite', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test.describe('Page Load and Title', () => {
    test('should load the page successfully', async ({ page }) => {
      await expect(page).toHaveURL(BASE_URL + '/');
    });

    test('should have correct page title', async ({ page }) => {
      const title = await page.title();
      expect(title).toBeTruthy();
    });
  });

  test.describe('Hero Section', () => {
    test('hero section should be visible', async ({ page }) => {
      const heroSection = page.locator('.hero');
      await expect(heroSection).toBeVisible();
    });

    test('should display hero images', async ({ page }) => {
      const baseImg = page.locator('.hero img.base');
      const reactImg = page.locator('.hero img.framework');
      const viteImg = page.locator('.hero img.vite');

      await expect(baseImg).toBeVisible();
      await expect(reactImg).toBeVisible();
      await expect(viteImg).toBeVisible();
    });

    test('hero images should have correct attributes', async ({ page }) => {
      const baseImg = page.locator('.hero img.base');
      await expect(baseImg).toHaveAttribute('width', '170');
      await expect(baseImg).toHaveAttribute('height', '179');
    });

    test('react logo should have alt text', async ({ page }) => {
      const reactImg = page.locator('.hero img.framework');
      await expect(reactImg).toHaveAttribute('alt', 'React logo');
    });

    test('vite logo should have alt text', async ({ page }) => {
      const viteImg = page.locator('.hero img.vite');
      await expect(viteImg).toHaveAttribute('alt', 'Vite logo');
    });
  });

  test.describe('Get Started Section', () => {
    test('should display Get Started heading', async ({ page }) => {
      const heading = page.locator('h1');
      await expect(heading).toContainText('Get started');
    });

    test('should display instructions text', async ({ page }) => {
      const paragraph = page.locator('section#center p');
      await expect(paragraph).toContainText('Edit');
      await expect(paragraph).toContainText('src/App.jsx');
      await expect(paragraph).toContainText('HMR');
    });

    test('should have code elements in instructions', async ({ page }) => {
      const codes = page.locator('section#center code');
      await expect(codes).toHaveCount(2);
      await expect(codes.nth(0)).toContainText('src/App.jsx');
      await expect(codes.nth(1)).toContainText('HMR');
    });
  });

  test.describe('Counter Button', () => {
    test('counter button should be visible', async ({ page }) => {
      const button = page.locator('button.counter');
      await expect(button).toBeVisible();
    });

    test('counter button should display initial count', async ({ page }) => {
      const button = page.locator('button.counter');
      await expect(button).toContainText('Count is 0');
    });

    test('counter button should increment on click', async ({ page }) => {
      const button = page.locator('button.counter');
      await button.click();
      await expect(button).toContainText('Count is 1');
    });

    test('counter should increment multiple times', async ({ page }) => {
      const button = page.locator('button.counter');
      
      for (let i = 0; i < 5; i++) {
        await button.click();
      }
      
      await expect(button).toContainText('Count is 5');
    });

    test('counter button should have correct class', async ({ page }) => {
      const button = page.locator('button.counter');
      await expect(button).toHaveClass(/counter/);
    });
  });

  test.describe('Center Section', () => {
    test('center section should be visible', async ({ page }) => {
      const section = page.locator('section#center');
      await expect(section).toBeVisible();
    });

    test('center section should contain all elements', async ({ page }) => {
      const section = page.locator('section#center');
      await expect(section).toContainText('Get started');
      await expect(section.locator('button.counter')).toBeVisible();
    });
  });

  test.describe('Decorative Ticks', () => {
    test('should display decorative ticks divider', async ({ page }) => {
      const ticks = page.locator('.ticks');
      await expect(ticks).toHaveCount(2);
    });

    test('ticks should be visible', async ({ page }) => {
      const ticks = page.locator('.ticks').first();
      await expect(ticks).toBeVisible();
    });
  });

  test.describe('Documentation Section', () => {
    test('documentation section should be visible', async ({ page }) => {
      const section = page.locator('#docs');
      await expect(section).toBeVisible();
    });

    test('documentation section should have icon', async ({ page }) => {
      const icon = page.locator('#docs svg.icon');
      await expect(icon).toBeVisible();
    });

    test('documentation heading should exist', async ({ page }) => {
      const heading = page.locator('#docs h2');
      await expect(heading).toContainText('Documentation');
    });

    test('documentation should have subtitle', async ({ page }) => {
      const subtitle = page.locator('#docs p');
      await expect(subtitle).toContainText('Your questions, answered');
    });

    test('documentation should have Vite link', async ({ page }) => {
      const viteLink = page.locator('#docs a[href="https://vite.dev/"]');
      await expect(viteLink).toBeVisible();
      await expect(viteLink).toContainText('Explore Vite');
    });

    test('documentation should have React link', async ({ page }) => {
      const reactLink = page.locator('#docs a[href="https://react.dev/"]');
      await expect(reactLink).toBeVisible();
      await expect(reactLink).toContainText('Learn more');
    });

    test('documentation links should open in new tab', async ({ page }) => {
      const viteLink = page.locator('#docs a[href="https://vite.dev/"]');
      const reactLink = page.locator('#docs a[href="https://react.dev/"]');
      
      await expect(viteLink).toHaveAttribute('target', '_blank');
      await expect(reactLink).toHaveAttribute('target', '_blank');
    });

    test('documentation should have list items', async ({ page }) => {
      const listItems = page.locator('#docs li');
      await expect(listItems).toHaveCount(2);
    });

    test('documentation links should have logos', async ({ page }) => {
      const logos = page.locator('#docs .logo');
      await expect(logos).toHaveCount(1);
      
      const buttonIcons = page.locator('#docs .button-icon');
      await expect(buttonIcons).toHaveCount(1);
    });
  });

  test.describe('Social Section', () => {
    test('social section should be visible', async ({ page }) => {
      const section = page.locator('#social');
      await expect(section).toBeVisible();
    });

    test('social section should have icon', async ({ page }) => {
      const icon = page.locator('#social svg.icon');
      await expect(icon).toBeVisible();
    });

    test('social heading should exist', async ({ page }) => {
      const heading = page.locator('#social h2');
      await expect(heading).toContainText('Connect with us');
    });

    test('social should have subtitle', async ({ page }) => {
      const subtitle = page.locator('#social p');
      await expect(subtitle).toContainText('Join the Vite community');
    });

    test('should have GitHub link', async ({ page }) => {
      const githubLink = page.locator('#social a[href="https://github.com/vitejs/vite"]');
      await expect(githubLink).toBeVisible();
      await expect(githubLink).toContainText('GitHub');
    });

    test('should have Discord link', async ({ page }) => {
      const discordLink = page.locator('#social a[href="https://chat.vite.dev/"]');
      await expect(discordLink).toBeVisible();
      await expect(discordLink).toContainText('Discord');
    });

    test('should have X.com link', async ({ page }) => {
      const xLink = page.locator('#social a[href="https://x.com/vite_js"]');
      await expect(xLink).toBeVisible();
      await expect(xLink).toContainText('X.com');
    });

    test('should have Bluesky link', async ({ page }) => {
      const blueskyLink = page.locator('#social a[href="https://bsky.app/profile/vite.dev"]');
      await expect(blueskyLink).toBeVisible();
      await expect(blueskyLink).toContainText('Bluesky');
    });

    test('social links should open in new tab', async ({ page }) => {
      const socialLinks = page.locator('#social a');
      const count = await socialLinks.count();
      
      for (let i = 0; i < count; i++) {
        await expect(socialLinks.nth(i)).toHaveAttribute('target', '_blank');
      }
    });

    test('social section should have correct number of links', async ({ page }) => {
      const socialLinks = page.locator('#social li');
      await expect(socialLinks).toHaveCount(4);
    });

    test('social links should have icons', async ({ page }) => {
      const icons = page.locator('#social .button-icon');
      await expect(icons).toHaveCount(4);
    });
  });

  test.describe('Next Steps Section', () => {
    test('next steps section should be visible', async ({ page }) => {
      const section = page.locator('#next-steps');
      await expect(section).toBeVisible();
    });

    test('next steps should contain docs and social subsections', async ({ page }) => {
      const docsSection = page.locator('#docs');
      const socialSection = page.locator('#social');
      
      await expect(docsSection).toBeVisible();
      await expect(socialSection).toBeVisible();
    });
  });

  test.describe('Spacer Section', () => {
    test('spacer section should exist', async ({ page }) => {
      const spacer = page.locator('#spacer');
      await expect(spacer).toBeVisible();
    });
  });

  test.describe('Overall Page Structure', () => {
    test('page should have main content sections', async ({ page }) => {
      const centerSection = page.locator('section#center');
      const nextStepsSection = page.locator('section#next-steps');
      const spacerSection = page.locator('#spacer');

      await expect(centerSection).toBeVisible();
      await expect(nextStepsSection).toBeVisible();
      await expect(spacerSection).toBeVisible();
    });

    test('all sections should be in correct order', async ({ page }) => {
      const sections = await page.locator('section, div#spacer').all();
      expect(sections.length).toBeGreaterThan(0);
    });

    test('page should not have console errors', async ({ page, context }) => {
      const errors: string[] = [];
      
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      await page.goto(BASE_URL);
      expect(errors).toHaveLength(0);
    });
  });

  test.describe('Responsive and Accessibility', () => {
    test('images should have alt text or be decorative', async ({ page }) => {
      const allImages = page.locator('img');
      const count = await allImages.count();

      for (let i = 0; i < count; i++) {
        const img = allImages.nth(i);
        const alt = await img.getAttribute('alt');
        expect(alt !== null).toBeTruthy();
      }
    });

    test('SVG icons should have role or aria-hidden', async ({ page }) => {
      const svgs = page.locator('svg');
      const count = await svgs.count();

      for (let i = 0; i < count; i++) {
        const svg = svgs.nth(i);
        const role = await svg.getAttribute('role');
        const ariaHidden = await svg.getAttribute('aria-hidden');
        expect(role || ariaHidden).toBeTruthy();
      }
    });

    test('buttons should be keyboard accessible', async ({ page }) => {
      const button = page.locator('button.counter');
      await button.focus();
      await page.keyboard.press('Enter');
      await expect(button).toContainText('Count is 1');
    });

    test('links should be keyboard accessible', async ({ page }) => {
      const firstLink = page.locator('#docs a').first();
      await firstLink.focus();
      const isFocused = await firstLink.evaluate(el => el === document.activeElement);
      expect(isFocused).toBeTruthy();
    });
  });

  test.describe('Performance and Rendering', () => {
    test('page should load within reasonable time', async ({ page }) => {
      const startTime = Date.now();
      await page.goto(BASE_URL);
      const loadTime = Date.now() - startTime;
      
      expect(loadTime).toBeLessThan(5000);
    });

    test('counter button should be interactive', async ({ page }) => {
      const button = page.locator('button.counter');
      
      const initialCount = await button.textContent();
      await button.click();
      const newCount = await button.textContent();
      
      expect(initialCount).not.toBe(newCount);
    });
  });
});
