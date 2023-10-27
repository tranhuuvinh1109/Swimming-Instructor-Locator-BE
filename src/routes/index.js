const UserRoute = require("./UserRoute");
const TeacherRoute = require("./TeacherRoute");
const AuthRoute = require("./AuthRoute");

function routes(app) {
  app.use("/user", UserRoute);
  app.use("/teacher", TeacherRoute);
  app.use("/auth", AuthRoute);
}

module.exports = routes;
