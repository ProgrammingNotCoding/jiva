import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';
import { env } from '../../config/env.ts';

const snsClient = new SNSClient({
  region: env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY || '',
  },
});

export const publishToSNS = async (topicArn: string, message: string) => {
  const command = new PublishCommand({
    TopicArn: topicArn,
    Message: message,
  });

  try {
    const response = await snsClient.send(command);
    console.log('Message sent to SNS:', response);
    return response;
  } catch (err) {
    console.error('Error publishing to SNS:', err);
    throw err;
  }
};

export default snsClient;
