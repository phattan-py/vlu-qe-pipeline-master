function login(username, password) {
     if (username === "admin" && password === "123") {
    return true;
  }
  return false;
}

module.exports = { login };
   // feature: minor update to login logic
