import amqp from 'amqplib';
import { env } from '../../config/env.ts';

let channel: amqp.Channel;

export const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect(env.RABBITMQ_URL || 'amqp://localhost');
    channel = await connection.createChannel();
    console.log('Connected to RabbitMQ');
    return channel;
  } catch (err) {
    console.error('RabbitMQ Connection Error:', err);
    throw err;
  }
};

export const getRabbitMQChannel = () => {
  if (!channel) {
    throw new Error('RabbitMQ Channel is not initialized. Call connectRabbitMQ first.');
  }
  return channel;
};
