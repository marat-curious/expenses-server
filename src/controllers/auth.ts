import * as jwt from 'jsonwebtoken';

export const generateToken = function generateAuthorizationToken(data: string) {
  const token = jwt.sign({ data }, 'secret', { algorithm: 'HS256' });
  return token;
};
