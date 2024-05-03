import bcryptjs from "bcryptjs";

import userModel from "../models/user.model.js";

class Auth {
  async signup(req, res) {
    const { username, email, password } = req.body;

    const hashedPassword = await bcryptjs.hash(password, 10);

    res.send("sign-up");
  }
}

const authController = new Auth();
export default authController;
