import express from 'express';
import type { Router } from 'express';
import request from 'supertest';
import { applyMiddleware, applyRoutes } from '../../utils/index.ts';
import middleware from '../../middleware/index.ts';
import errorHandlers from '../../middleware/errorHandlers.ts';
import routes from './routes.ts';
import server from '../../server.ts';

describe('routes', () => {
  test('a valid string query', async () => {
    const response = await request(server).get('/api/v1/search?q=Cham');
    expect(response.status).toEqual(200);
  });
});
