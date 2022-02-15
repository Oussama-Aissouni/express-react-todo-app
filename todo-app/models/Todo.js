const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    maxlength : [10, "name can not be more than 10 characters"]
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("todos", todoSchema);
