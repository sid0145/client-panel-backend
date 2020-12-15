const express = require("express");

const userController = require("../controllers/user");

const userRouter = express.Router();

userRouter.post("/signUp", userController.createUser);
userRouter.post("/signIn", userController.getUser);

module.exports = userRouter;
