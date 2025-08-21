import express from 'express';
import type { Router } from 'express';
import request from 'supertest';
import { applyMiddleware, applyRoutes } from '../../utils/index.ts';
import axios from 'axios';
import middleware from '../../middleware/index.ts';
import errorHandlers from '../../middleware/errorHandlers.ts';
import routes from './routes.ts';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

mockedAxios.get.mockResolvedValue({ data: { features: [] } });

describe('routes', () => {
  let router: Router;

  beforeEach(() => {
    router = express();
    applyMiddleware(middleware, router);
    applyRoutes(routes, router);
    applyMiddleware(errorHandlers, router);
  });

  test('a valid string query', async () => {
    const response = await request(router).get('/api/v1/search?q=Cham');
    expect(response.status).toEqual(200);
  });
});
