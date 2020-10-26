import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/user';
import UserService from '../services/user';

export default class UserController {
  private userService;

  constructor() {
    this.userService = new UserService(new UserModel());
    this.getList = this.getList.bind(this);
  }

  async getList(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const list = await this.userService.getList();
      res.send(JSON.stringify(list));
    } catch (e) {
      next(e);
    }
  }
}
