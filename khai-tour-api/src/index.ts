import * as functions from 'firebase-functions';
import { NestServer } from './nest-server';
export const api = functions
  .runWith({ memory: '256MB', timeoutSeconds: 200 })
  .https.onRequest(NestServer);
