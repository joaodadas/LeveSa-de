import { Context } from 'aws-lambda';

export const mockContext: Context = {
  callbackWaitsForEmptyEventLoop: false,
  functionName: 'testFunction',
  functionVersion: '1',
  invokedFunctionArn:
    'arn:aws:lambda:us-east-1:123456789012:function:testFunction',
  memoryLimitInMB: '128',
  awsRequestId: 'test-request-id',
  logGroupName: '/aws/lambda/testFunction',
  logStreamName: 'test-log-stream',
  getRemainingTimeInMillis: () => 1000,
  done: () => null,
  fail: () => null,
  succeed: () => null,
};
