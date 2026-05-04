import * as dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  BASE_URL: process.env.BASE_URL!,
  USERNAME: process.env.KPJ_USERNAME!,   // ✅ changed
  PASSWORD: process.env.KPJ_PASSWORD!
};