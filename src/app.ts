import * as hubspot from '@hubspot/api-client';
import * as dotenv from 'dotenv';

dotenv.config();

const hubspotClient = new hubspot.Client({ apiKey: process.env.CRM_API_KEY });

(async () => {
  try {
    const res = await hubspotClient.crm.companies.getAll();
    console.log(res);
  } catch (e) {
    console.error(JSON.stringify(e, null, 2));
  }
})();
