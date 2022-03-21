import * as bookStoreService from '@/service/bookStore/bookStoreService';

import { Request, Response } from 'express';
export const getAll = async (req: Request, res: Response) => {
  console.log((req as any).user);
  const result = await bookStoreService.getAll(req);

  res.json(result);
};
export const create = async (req: Request, res: Response) => {
  const result = await bookStoreService.create(req);

  res.json(result);
};
export const update = async (req: Request, res: Response) => {
  const result = await bookStoreService.update(req);

  res.json(result);
};
export const Delete = async (req: Request, res: Response) => {
  const result = await bookStoreService.Delete(req);

  res.json(result);
};
