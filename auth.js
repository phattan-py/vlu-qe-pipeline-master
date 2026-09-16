function login(username, password) {
  // Kiểm tra username rỗng
  if (!username) {
    throw new Error("Username không đựợc để trống");
  }

  // Kiểm tra password rỗng
  if (!password) {
    throw new Error("Password không được để trống");
  }

  // Tài khoản bị khóa
  if (username === "locked") {
    throw new Error("Tài khoản đã bị khóa");
  }

  // Mật khẩu chứa ký tự đặc biệt
  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    throw new Error("Mật khẩu không được chứa ký tự đặc biệt");
  }

  // Kiểm tra tài khoản và mật khẩu
  if (username === "admin" && password === "123") {
    return true;
  }

  // Mật khẩu sai
  throw new Error("Sai username hoặc password");
}

module.exports = { login };
