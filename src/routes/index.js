const UserRoute = require("./UserRoute");
const TeacherRoute = require("./TeacherRoute");
const AuthRoute = require("./AuthRoute");
const RootRoute = require("./RootRoute");

function routes(app) {
  app.use("/", RootRoute);
  app.use("/user", UserRoute);
  app.use("/teacher", TeacherRoute);
  app.use("/auth", AuthRoute);
}

module.exports = routes;
