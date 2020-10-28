import PoolModel from './pool';

export default class UserModel extends PoolModel {
  constructor() {
    super();
  }

  create(params: [string, string, string]) {
    const query = 'INSERT INTO users (username, salt, hash) VALUES ($1, $2, $3)';
    return this.query(query, params);
  }

  getList(params = []) {
    return this.query('SELECT * FROM users', params);
  }
};
