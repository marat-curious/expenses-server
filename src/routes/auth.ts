import * as express from 'express';

import { generateToken } from '../controllers/auth';
import UserController from '../controllers/user';

const router = express.Router();
const controller = new UserController();

router.get('/list', controller.getList);

router.get('/login', (req, res) => {
  const token = generateToken('pass');
  res.send(token);
});

export default router;
