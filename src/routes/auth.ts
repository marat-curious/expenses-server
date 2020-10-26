import * as express from 'express';

import { generateToken } from '../controllers/auth';
import UserController from '../controllers/user';

const router = express.Router();

router.get('/login', (req, res) => {
  const controller = new UserController();
  console.log(controller.getList());

  const token = generateToken('pass');
  res.send(token);
});

export default router;
