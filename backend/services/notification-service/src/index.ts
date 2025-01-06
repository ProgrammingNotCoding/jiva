import { serve } from '@hono/node-server';
import { env } from '@shared/config/env.ts';
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

const port = env.NOTIFICATION_SERVICE_PORT;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
