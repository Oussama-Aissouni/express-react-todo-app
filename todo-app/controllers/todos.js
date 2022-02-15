const Todo = require("../models/Todo");

const getAllTodos = async (req, res) => {
  const todo = await Todo.find({});
  res.status(200).json({ todo });
};

const createTodo = async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(201).json({ todo });
};

const getTodo = async (req, res) => {
  const { id: todoId } = req.params;
  const todo = await Todo.findById({ _id: todoId });
  res.status(200).json({ todo });
};

const deleteTodo = async (req, res) => {
  const { id: todoId } = req.params;
  const todo = await Todo.findOneAndDelete({ _id: todoId });
  res.status(200).json({ todo });
};

const updateTodo = async (req, res) => {
  const { id: todoId } = req.params;
  const todo = await Todo.findOneAndUpdate({ _id: todoId }, req.body, {
    new: true,
    runValidators : true
  });
  res.status(200).json({ todo });
};

module.exports = {
  getAllTodos,
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
};
