# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\login.api.spec.ts >> Validate KPJ Login API
- Location: tests\api\login.api.spec.ts:4:5

# Error details

```
Error: unable to verify the first certificate
```

# Test source

```ts
  1  | import axios from 'axios';
  2  | import { ENV } from '../../utils/env';
  3  | 
  4  | export async function loginAPI() {
> 5  |   const response = await axios.post(
     |                    ^ Error: unable to verify the first certificate
  6  |     `${ENV.BASE_URL}/api/login`,
  7  |     {
  8  |       username: ENV.USERNAME,
  9  |       password: ENV.PASSWORD
  10 |     }
  11 |   );
  12 |   return response;
  13 | }
```