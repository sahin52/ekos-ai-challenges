import * as bookStoreService from '@/service/bookStore/bookStoreService';

import { Request, Response } from 'express';
import * as homeController from '@/controller/home';

import { Router } from 'express';
import User from '@/model/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import auth from '@/middleware/auth';

export const getAll = (req: Request, res: Response) => {
  const result = bookStoreService.getAll(req);

  res.json(result);
};
export const create = (req: Request, res: Response) => {
  const result = bookStoreService.create(req);

  res.json(result);
};
export const update = (req: Request, res: Response) => {
  const result = bookStoreService.update(req);

  res.json(result);
};
export const Delete = (req: Request, res: Response) => {
  const result = bookStoreService.Delete(req);

  res.json(result);
};
