import bcryptjs from "bcryptjs";

import { errorHandler } from "../../utils/error.js";
import userModel from "../models/user.model.js";

class Auth {
  async signup(req, res, next) {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
        return next(errorHandler(400, "All fields are required"));
      }
      const hashedPassword = bcryptjs.hashSync(password, 10);
      await userModel.create({
        username,
        email,
        password: hashedPassword,
      });
      res.json("sign-up successful");
    } catch (error) {
      next(error);
    }
  }
}

const authController = new Auth();
export default authController;
