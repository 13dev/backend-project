const { Users } = require("../models");

module.exports = new class UsersController {
  index(request, response, next) {
    Users
      .findAll()
      .then((result) => response.formatter.ok(result))
      .catch((result) => response.formatter.serverError(result));
  }

  //FIND A CERTAIN USER
  findUser(request, response, next) {
    Users.findAll({
      where: { id: request.params.id }
    })
      .then((result) => response.formatter.ok(result))
      .catch((result) => response.formatter.serverError(result));
  }
  //CREATE USER
  createUser(request, response, next) {
    Users.create({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
      createdAt: new Date(),
      updatedAt: new Date()
    })
      .then((result) => response.formatter.ok(result))
      .catch((result) => response.formatter.serverError(result));
  }
  //UPDATE USER
  updateUser(request, response, next) {
    Users.update({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
    }, { where: { id: request.params.id } })
      .then((result) => response.formatter.ok(result))
      .catch((result) => response.formatter.serverError(result));
  }
  //DELETE USER
  deleteUser(request, response, next) {
    Users.destroy({ where: { id: request.params.id } })
      .then((result) => response.formatter.ok(result))
      .catch((result) => response.formatter.serverError(result));
  }

};
