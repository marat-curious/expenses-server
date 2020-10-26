import PoolModel from './pool';

export default class UserModel extends PoolModel {
  constructor() {
    super();
  }

  getList(params = []) {
    return this.query('SELECT * FROM users', params);
  }
};
