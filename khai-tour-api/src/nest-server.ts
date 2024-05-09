// Express
import * as express from 'express';
import * as cors from 'cors';

// NestJs
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
const corsOptions = { origin: true };

export const NestServer: express.Express = express();
/* Express middleware. */
NestServer.use(express.json());
NestServer.use(express.urlencoded({ extended: false }));
NestServer.use(cors(corsOptions));
/* End of express middleware. */

const startNestApplication = async (expressInstance: express.Express) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  await app.init();
};

void startNestApplication(NestServer);
