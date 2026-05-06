# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:7:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('link', { name: 'OP' })

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
> 8  |     await this.page.getByRole('link', { name: 'OP' }).click(); 
     |                                                       ^ Error: locator.click: Test ended.
  9  |     await this.page.getByRole('link', { name: 'Registration' }).click();
  10 | 
  11 |     // Click Registration
  12 |     // await this.page.locator('#li1iPatientRegistration a').click();
  13 | 
  14 |     // Ensure page loaded
  15 |     await this.page.waitForSelector('text=Patient Information');
  16 |   }
  17 | }
```