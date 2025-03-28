require('dotenv').config();  // Load .env variables
const mongoose = require("mongoose");

// Connect to MongoDB using the URI stored in the .env file
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define the Todo schema
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false
  }
});

// Create the Todo model
const todo = mongoose.model("todos", todoSchema);

// Export the Todo model for use elsewhere
module.exports = {
  todo
};
