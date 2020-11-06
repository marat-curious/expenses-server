import { QueryResult } from 'pg';
import { PoolModel, IPoolModel } from './pool';

export interface IUserModel extends IPoolModel {
  create(params: [string, string, string]): Promise<QueryResult>;
}

export default class UserModel extends PoolModel implements IUserModel {
  constructor() {
    super();
  }

  create(params: [string, string, string]): Promise<QueryResult> {
    const query = 'INSERT INTO users (username, salt, hash) VALUES ($1, $2, $3)';
    return this.query(query, params);
  }

  getList(params = []): Promise<QueryResult> {
    return this.query('SELECT * FROM users', params);
  }
}
