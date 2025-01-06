import { z } from 'zod';

const envSchema = z.object({
  DB_URL: z.string(),
  AUTH_SERVICE_PORT: z.number().default(5000),
  ERP_SERVICE_PORT: z.number().default(5001),
  FILE_SERVICE_PORT: z.number().default(5002),
  NOTIFICATION_SERVICE_PORT: z.number().default(5003),
  SHIFT_LOG_SERVICE_PORT: z.number().default(5005),
  SMP_SERVICE_PORT: z.number().default(5006),
  REDIS_URL: z.string().default('redis://localhost:6379'),
  RABBITMQ_URL: z.string().default('amqp://localhost:5672'),
  AWS_ENDPOINT: z.string().default('http://localhost:4566'),
  AWS_REGION: z.string().default('us-east-1'),
  AWS_ACCESS_KEY_ID: z.string().default('test'),
  AWS_SECRET_ACCESS_KEY: z.string().default('test'),
  S3_BUCKET_NAME: z.string().default('jiva-bucket'),
  SNS_TOPIC_ARN: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

export const env: Env = envSchema.parse(process.env);
