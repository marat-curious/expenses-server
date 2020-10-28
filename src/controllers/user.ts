import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/user';
import UserService from '../services/user';

export default class UserController {
  private userService;

  constructor() {
    this.userService = new UserService(new UserModel());
    this.create = this.create.bind(this);
    this.getList = this.getList.bind(this);
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { user, password } = req.body;
    console.log(user, password);
    if (!user || !password) {
      return next();
    }

    try {
      const data = await this.userService.create(user, password);
      res.send(data);
    } catch(e) {
      next(e);
    }
  }

  async getList(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const list = await this.userService.getList();
      res.send(JSON.stringify(list));
    } catch(e) {
      next(e);
    }
  }
}
