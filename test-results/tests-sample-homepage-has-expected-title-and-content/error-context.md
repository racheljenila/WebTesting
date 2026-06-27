# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\sample.spec.js >> homepage has expected title and content
- Location: tests\sample.spec.js:4:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
Timeout: 5000ms
- Expected substring  - 1
+ Received string     + 6

- react
+
+     Get startedEdit src/App.jsx and save to test HMRCount is 0DocumentationYour questions, answeredExplore ViteLearn moreConnect with usJoin the Vite communityGitHubDiscordX.comBluesky
+     
+   
+
+

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('body')
    14 × locator resolved to <body>…</body>
       - unexpected value "
    Get startedEdit src/App.jsx and save to test HMRCount is 0DocumentationYour questions, answeredExplore ViteLearn moreConnect with usJoin the Vite communityGitHubDiscordX.comBluesky
    
  

"

```

```yaml
- img "React logo"
- img "Vite logo"
- heading "Get started" [level=1]
- paragraph:
  - text: Edit
  - code: src/App.jsx
  - text: and save to test
  - code: HMR
- button "Count is 0"
- heading "Documentation" [level=2]
- paragraph: Your questions, answered
- list:
  - listitem:
    - link "Explore Vite":
      - /url: https://vite.dev/
  - listitem:
    - link "Learn more":
      - /url: https://react.dev/
- heading "Connect with us" [level=2]
- paragraph: Join the Vite community
- list:
  - listitem:
    - link "GitHub":
      - /url: https://github.com/vitejs/vite
  - listitem:
    - link "Discord":
      - /url: https://chat.vite.dev/
  - listitem:
    - link "X.com":
      - /url: https://x.com/vite_js
  - listitem:
    - link "Bluesky":
      - /url: https://bsky.app/profile/vite.dev
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | 
  3 | // Sample Playwright test for the web app's homepage
  4 | test('homepage has expected title and content', async ({ page }) => {
  5 |     await page.goto('http://localhost:57841/'); // Adjust port if needed
  6 |   await expect(page).toHaveTitle(/webapp/i);
> 7 |   await expect(page.locator('body')).toContainText('react'); // Adjust text as per your app
    |                                      ^ Error: expect(locator).toContainText(expected) failed
  8 | });
  9 | 
```