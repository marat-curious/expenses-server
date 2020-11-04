import * as bcrypt from 'bcrypt';
import UserModel from '../models/user';

interface IUserService {
  create(user: string, password: string): Promise<string[]>;
}

export default class UserService implements IUserService {
  private userModel;

  constructor(userModel: UserModel) {
    this.userModel = userModel;
  }

  private generateSalt(): Promise<string> {
    return bcrypt.genSalt();
  }

  private generateHash(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  public async create(user: string, password: string): Promise<string[]> {
    const salt = await this.generateSalt();
    const hash = await this.generateHash(password, salt);
    const { rows } = await this.userModel.create([user, salt, hash]);
    return rows;
  }

  async getList() {
    const { rows } = await this.userModel.getList();
    return rows;
  }
};
