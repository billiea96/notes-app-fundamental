/* eslint-disable object-curly-newline */
const AuthenticationHandler = require("./handler");
const routes = require("./routes");

module.exports = {
  name: "authentications",
  version: "1.0.0",
  register: async (server, { authenticationsService, usersService, tokenManager, validator }) => {
    const handler = new AuthenticationHandler(
      authenticationsService,
      usersService,
      tokenManager,
      validator
    );
    server.route(routes(handler));
  },
};
