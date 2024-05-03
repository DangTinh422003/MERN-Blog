class User {
  test(req, res) {
    res.send("ok");
  }
}

const userController = new User();
export default userController;
