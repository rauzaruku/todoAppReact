// write basic express boilerplate with express.json() middleware

const express = require("express");
const cors = require("cors");

const {createTodo, updateTodo} = require("./types");
const  { todo } = require("./db");

const app = express();
app.use(express.json());
app.use(cors({
  origin : "http://localhost:5173"
}));



app.get("/todos", async (req, res) => {

  const todos = await todo.find({});
  res.json({
    todos
  })
});

app.post("/todo", async (req, res) => {
  
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg : "you sent the wrong inputs",
    })
    return;
  }
  // put it in mongodb
  await todo.create({
    title : createPayload.title,
    description : createPayload.description,
    completed : false
  })

  res.json({
    msg : "todo created"
  })
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg : "you sent the wrong inputs",
    })
    return;
  }

  await todo.updateOne({
    _id : req.body.id
  }, {
    completed : true
  })

  res.json({
    msg : "Todo marked as completed"
  })
});


app.listen(3000);