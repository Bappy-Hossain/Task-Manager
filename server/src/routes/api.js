const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UsersController");
const TasksController = require("../controllers/TasksController");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");

//User api
router.post("/registration", UsersController.registration);
router.post("/login", UsersController.login);
router.post(
  "/profileUpdate",
  AuthVerifyMiddleware,
  UsersController.profileUpdate
);

//Task api
router.post("/createTask", AuthVerifyMiddleware, TasksController.createTask);
router.get(
  "/updateTaskStatus/:id/:status",
  AuthVerifyMiddleware,
  TasksController.updateTaskStatus
);
router.get("/deleteTask/:id", AuthVerifyMiddleware, TasksController.deleteTask);

module.exports = router;
