import { createClient } from 'redis';
import { env } from '../../config/env.ts';

const redisClient = createClient({
  url: env.REDIS_URL || 'redis://localhost:6379',
});

redisClient.on('error', (err) => {
  console.error('Redis Client Error:', err);
});

(async () => {
  await redisClient.connect();
  console.log('Connected to Redis');
})();

export default redisClient;
