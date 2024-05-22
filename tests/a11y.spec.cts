import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { createHtmlReport } from 'axe-html-reporter';
import fs from 'fs';

const data = require('../src/data/pages.json')
const pages = data.pages;

fs.rmSync('public/accessibility', { recursive: true, force: true });

test.describe('ACCESSIBILITY TEST', () => {
  for (const pageData of pages) {
    test(`should not have accessibility issues on page ${pageData.title}`, async ({ page }) => {
      const customSummary = `Test Case: Complete page analysis
        <br>Steps:</br>
        <ol style="margin: 0;padding-bottom:30px;">
        <li>Open http://localhost:4321/${pageData.slug}</li>
        <li>Analyze the entire page with all rules enabled</li>
        </ol>`;

      await page.goto(`http://localhost:4321/${pageData.slug}`);

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      createHtmlReport({
        results: accessibilityScanResults,
        options: {
          customSummary,
          reportFileName: "index.html",
          outputDir: `public/accessibility/${pageData.pageName}`,
        },
      });

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});
