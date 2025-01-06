import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { env } from '../config/env';

const pool = new Pool({
  connectionString: env.DB_URL,
});

pool.on('connect', () => {
  console.log('New client connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client', err);
});

pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to PostgreSQL database', err.stack);
  } else {
    console.log('Successfully connected to PostgreSQL database');
    release();
  }
});

export const db = drizzle({ client: pool });
