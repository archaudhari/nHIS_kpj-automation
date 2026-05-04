import axios from 'axios';
import https from 'https';
import { ENV } from '../../utils/env';

export async function loginAPI() {
  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  const response = await axios.post(
    `${ENV.BASE_URL}/Account/Login`,
    {
      username: ENV.USERNAME,
      password: ENV.PASSWORD
    },
    {
      httpsAgent: agent
    }
  );

  console.log("RAW RESPONSE:", response.data);

  return response;
}