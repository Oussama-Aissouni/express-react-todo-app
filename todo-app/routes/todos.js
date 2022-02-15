const express = require("express");
const {
  getAllTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todos");
const router = express.Router();

router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").get(getTodo).patch(updateTodo).delete(deleteTodo);

module.exports = router;
