import UserModel from '../models/user';

export default class UserService {
  private userModel;

  constructor(userModel: UserModel) {
    this.userModel = userModel;
  }

  async getList() {
    const { rows } = await this.userModel.getList();
    return rows;
  }
};
