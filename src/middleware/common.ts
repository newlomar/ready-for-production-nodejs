import { Router } from 'express';
import cors from 'cors';
import parser from 'body-parser';
import compression from 'compression';
import { textChangeRangeIsUnchanged } from 'typescript';

export const handleCors = (router: Router) => router.use(cors({ credentials: true, origin: true })); // TODO: testar sem retornar para ver o que acontece

export const handleBodyRequestParsing = (router: Router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleCompression = (router: Router) => {
  router.use(compression());
};
