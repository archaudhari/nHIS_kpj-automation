# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:7:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#li0OP > a')

```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | 
  3  | export class OPPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   async openRegistration() {
  7  |     // Click OP menu
> 8  |     await this.page.locator('#li0OP > a').click();
     |                                           ^ Error: locator.click: Target page, context or browser has been closed
  9  | 
  10 |     // Wait for submenu
  11 |     await this.page.waitForSelector('#li1iPatientRegistration');
  12 | 
  13 |     // Click Registration
  14 |     await this.page.locator('#li1iPatientRegistration a').click();
  15 | 
  16 |     // Ensure page loaded
  17 |     await this.page.waitForSelector('text=Patient Information');
  18 |   }
  19 | }
```