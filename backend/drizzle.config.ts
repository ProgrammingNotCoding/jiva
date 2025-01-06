import { defineConfig } from 'drizzle-kit';
import { env } from './shared/config/env';

export default defineConfig({
  schema: 'shared/database/schema',
  out: '.drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DB_URL,
  },
});
