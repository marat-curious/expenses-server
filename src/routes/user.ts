import * as express from 'express';
import UserController from '../controllers/user';

const router = express.Router();
const controller = new UserController();

router.get('/list', controller.getList);
router.post('/create', controller.create);

export default router;
