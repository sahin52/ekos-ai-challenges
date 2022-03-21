import * as recommendationService from '@/service/recommendation/recommendationService';

import { Request, Response } from 'express';
export const recommend = async (req: Request, res: Response) => {
  console.log((req as any).user);
  const result = await recommendationService.recommend(req);

  res.json(result);
};