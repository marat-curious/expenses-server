import UserModel from '../models/user';
import UserService from '../services/user';

export default class UserController {
  private userService;

  constructor() {
    this.userService = new UserService(new UserModel());
  }

  getList() {
    return this.userService.getList();
  }
}
