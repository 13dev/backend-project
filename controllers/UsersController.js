const { Users } = require("../models/users");

module.exports = new class UsersController {
  index(request, response, next) {
    Users.findAll()
      .then((result) => response.formatter.ok(result))
      .catch((result) => response.formatter.serverError(result));
  }

  //FIND A CERTAIN USER
  findUser(request, response, next, userId) {
    Users.findAll({
      where: { id: userId }
    })
      .then((result) => response.formatter.ok(result))
      .catch((result) => response.formatter.serverError(result));
  }
};
