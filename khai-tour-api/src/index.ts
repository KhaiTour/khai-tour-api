import * as functions from 'firebase-functions';
import { NestServer } from './nest-server';

const runtimeOptionals: functions.RuntimeOptions = {
  memory: '256MB',
  timeoutSeconds: 200,
  minInstances: 0,
  maxInstances: 1,
};
export const api = functions
  .region('us-central1')
  .runWith(runtimeOptionals)
  .https.onRequest(NestServer);
