import * as homeService from '@/service/home';
import * as loginService from '@/service/loginService/loginService'

import { Request, Response } from 'express';


/**
 * Gets the API information.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const getAppInfo = (req: Request, res: Response) => {
  const result = homeService.getAppInfo();

  res.json(result);
};
export const register = loginService.register;
export const login =  loginService.login;
export const test = async (req: Request, res: Response) => {
  console.log((req as any).user)
  res.status(200).send("Test Successful");
}
