const express = require("express");
const {
  getAllTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
  deleteAll
} = require("../controllers/todos");
const router = express.Router();

router.route("/").get(getAllTodos).post(createTodo).delete(deleteAll);
router.route("/:id").get(getTodo).patch(updateTodo).delete(deleteTodo);

module.exports = router;
