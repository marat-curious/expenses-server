import * as express from 'express';
import { generateToken } from '../controllers/auth';

const router = express.Router();

router.get('/login', (req, res) => {
  const token = generateToken('pass');
  res.send(token);
});

export default router;
