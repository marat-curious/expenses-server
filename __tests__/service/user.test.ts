import * as bcrypt from 'bcrypt';
import UserService from '@/services/user';
import UserModel from '@/models/user';

const mockFun = jest.fn().mockResolvedValue({ rows: ['user'] });

jest.mock('bcrypt');
jest.mock('@/models/user', () => {
  return jest.fn().mockImplementation(() => {
    return {
      create: mockFun,
    };
  });
});

describe('User service', () => {
  describe('"create" method', () => {
    it('calls bcrypt\'s "genSalt" method', async () => {
      expect.assertions(1);

      bcrypt.genSalt.mockResolvedValue('');

      const service = new UserService(new UserModel());
      await service.create();

      expect(bcrypt.genSalt).toHaveBeenCalled();
    });

    it('calls bcrypt\'s "hash" method', async () => {
      expect.assertions(1);

      const salt = 'salt';
      const password = 'password';
      bcrypt.genSalt.mockResolvedValue(salt);
      bcrypt.hash.mockResolvedValue('');

      const service = new UserService(new UserModel());
      await service.create('', password);

      expect(bcrypt.hash).toHaveBeenCalledWith(password, salt);
    });

    it('calls UserModel\'s "create" method', async () => {
      expect.assertions(1);

      const user = 'user';
      const password = 'password';
      const salt = 'salt';
      const hash = 'hash';
      bcrypt.genSalt.mockResolvedValue(salt);
      bcrypt.hash.mockResolvedValue(hash);

      const service = new UserService(new UserModel());
      await service.create(user, password);

      expect(mockFun).toHaveBeenCalledWith(expect.arrayContaining([user, salt, hash]));
    });
  });
});
