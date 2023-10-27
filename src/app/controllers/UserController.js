const User = require("../models/User");

class UserController {
  // [GET] /user
  async index(req, res) {
    try {
      const users = await User.find({});
      res.status(200).json({ message: "success", user: users });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error when query user table." });
    }
  }

  //[POST] /user/create
  async create(req, res) {
    try {
      const newUser = new User(req.body);
      await newUser.save();

      res
        .status(200)
        .json({ message: "Create User successfully", user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Create User Fail" });
    }
  }
}

module.exports = new UserController();
