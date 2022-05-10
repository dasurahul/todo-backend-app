const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  todoName: {
    type: String,
    required: true,
  },
  todoDescription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("data", TodoSchema);
