import * as express from 'express';
import auth from './auth';
import user from './user';

const router = express.Router();

router.use('/auth', auth);
router.use('/user', user);

export default router;
