import * as homeController from '@/controller/home';
import * as bookStoreController from '@/controller/bookStoreController';
import * as recommendationController from '@/controller/recommendationController';

import { Router } from 'express';
import { verifyToken } from '@/middleware/auth';

const router = Router();

router.get('/', homeController.getAppInfo);
router.post('/register', homeController.register);

// Login
router.post('/login', homeController.login);
router.post('/test', verifyToken, homeController.test);

router.get('/books/get-all', bookStoreController.getAll);
router.post('/books/create', verifyToken, bookStoreController.create);
router.post('/books/update', verifyToken, bookStoreController.update);
router.post('/books/delete', verifyToken, bookStoreController.Delete);

router.get('/recommend', verifyToken, recommendationController.recommend);
export default router;
