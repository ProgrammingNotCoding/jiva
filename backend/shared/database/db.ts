import { drizzle } from 'drizzle-orm/postgres-js';
import { env } from '../config/env.ts';
import postgres from 'postgres';

const client = postgres(env.DB_URL)
export const db = drizzle(client);
