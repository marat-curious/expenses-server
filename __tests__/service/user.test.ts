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

describe("User service", () => {
  it('"create" method generate salt, hash and call UserModel create method', async () => {
    expect.assertions(3);
    const salt = 'randomSaltString';
    const hash = 'randomHashString';

    bcrypt.genSalt.mockResolvedValue(salt);
    bcrypt.hash.mockResolvedValue(hash);

    const service = new UserService(new UserModel());
    await service.create();

    expect(bcrypt.genSalt).toHaveBeenCalled();
    expect(bcrypt.hash).toHaveBeenCalled();
    expect(mockFun).toHaveBeenCalled();
  });
});
