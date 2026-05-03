# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\login.api.spec.ts >> Validate KPJ Login API
- Location: tests\api\login.api.spec.ts:4:5

# Error details

```
Error: expect(received).toHaveProperty(path)

Matcher error: received value must not be null nor undefined

Received has value: undefined
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | import { loginAPI } from './auth.api';
  3 | 
  4 | test('Validate KPJ Login API', async () => {
  5 |   const response = await loginAPI();
  6 | 
  7 |   expect(response.status).toBe(200);
> 8 |   expect(response.data.data).toHaveProperty('accessToken');
    |                              ^ Error: expect(received).toHaveProperty(path)
  9 | });
```