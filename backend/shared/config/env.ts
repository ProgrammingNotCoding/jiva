import { z } from 'zod';

const envSchema = z.object({
  DB_URL: z.string(),
  AUTH_SERVICE_PORT: z.number().default(5000),
  ERP_SERVICE_PORT: z.number().default(5001),
  FILE_SERVICE_PORT: z.number().default(5002),
  NOTIFICATION_SERVICE_PORT: z.number().default(5003),
  SHIFT_LOG_SERVICE_PORT: z.number().default(5005),
  SMP_SERVICE_PORT: z.number().default(5006),
});

export type Env = z.infer<typeof envSchema>;

export const env: Env = envSchema.parse(process.env);
