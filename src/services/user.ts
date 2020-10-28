import * as bcrypt from 'bcrypt';
import UserModel from '../models/user';

export default class UserService {
  private userModel;

  constructor(userModel: UserModel) {
    this.userModel = userModel;
  }

  async create(user: string, password: string) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    const { rows } = await this.userModel.create([user, salt, hash]);
    return rows;
  }

  async getList() {
    const { rows } = await this.userModel.getList();
    return rows;
  }
};
