const User = require("../models/User");

class AuthController {
  // [POST] /auth/login
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      if (user.password !== password) {
        return res.status(401).json({ error: "Invalid password" });
      }

      const userData = { ...user._doc };
      delete userData.password;

      res.status(200).json({ message: "Login successful", user: userData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Login failed" });
    }
  }

  // [POST] /auth/register
  async register(req, res) {
    try {
      const { email } = req.body;
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res
          .status(400)
          .json({ error: "User with this email already exists" });
      }

      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json({ message: "Registration successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Registration failed" });
    }
  }
}

module.exports = new AuthController();
