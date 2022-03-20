import * as homeController from '@/controller/home';

import { Router } from 'express';
import User from '@/model/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import auth from '@/middleware/auth';

const router = Router();

router.get('/', homeController.getAppInfo);
router.post('/register', homeController.register);

// Login
router.post('/login', homeController.login);
router.post('/test', auth, homeController.test);
export default router;
