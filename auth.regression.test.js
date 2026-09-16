const { login } = require('./auth');

describe('Regression Test - Login Exception Cases', () => {
  test('Mật khẩu sai phải trả về false', () => {
    expect(login('admin', 'wrongpass')).toBe(false);
  });

  test('Username rỗng phải trả về false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('Password rỗng phải trả về false', () => {
    expect(login('admin', '')).toBe(false);
  });

  test('Mật khẩu chứa ký tự đặc biệt phải trả về false', () => {
    expect(login('admin', '123@#$%')).toBe(false);
  });

  test('Username không tồn tại (tài khoản không hợp lệ) phải trả về false', () => {
    expect(login('unknown_user', '123')).toBe(false);
  });

  test('Username đúng nhưng có khoảng trắng thừa phải trả về false', () => {
    expect(login(' admin ', '123')).toBe(false);
  });
});
