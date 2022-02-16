const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: [true, "must provide a topic"],
    maxlength: [20, "topic can not be more than 20 characters"],
  },
  details: {
    type: String,
    required: [true, "must provide details"],
    maxlength: [40, "details can not be more than 40 characters"],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("todos", todoSchema);
