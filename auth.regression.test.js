const { login } = require("./auth");

describe("Regression Test - Login", () => {
  test("Đăng nhập đúng", () => {
    expect(login("admin", "123")).toBe(true);
  });

  test("Mật khẩu sai", () => {
    expect(() => login("admin", "456"))
      .toThrow("Sai username hoặc password");
  });

  test("Username sai", () => {
    expect(() => login("user", "123"))
      .toThrow("Sai username hoặc password");
  });

  test("Username rỗng", () => {
    expect(() => login("", "123"))
      .toThrow("Username không được để trống");
  });

  test("Mật khẩu rỗng", () => {
    expect(() => login("admin", ""))
      .toThrow("Password không được để trống");
  });

  test("Mật khẩu chứa ký tự đặc biệt", () => {
    expect(() => login("admin", "123@"))
      .toThrow("Mật khẩu không được chứa ký tự đặc biệt");
  });

  test("Tài khoản bị khóa", () => {
    expect(() => login("locked", "123"))
      .toThrow("Tài khoản đã bị khóa");
  });
});
