const express = require("express");
router = express.Router();
router2 = express.Router();
usersRoute = require("../controllers/userController");
router.get("/", usersRoute.userController);
router2.get("/", usersRoute.userControllerALL);

module.exports = {
    userRouter: router,
    userAllRouter: router2
  };