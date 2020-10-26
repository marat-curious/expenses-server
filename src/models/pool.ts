import { Pool } from 'pg';

export default abstract class PoolModel {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      database: process.env.DB_NAME,
      host: process.env.POSTGRES_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.POSTGRES_PORT),
      user: process.env.DB_USER,
    });
  }

  query(query: string, params: string[]) {
    return this.pool.query(query, params);
  }
};
