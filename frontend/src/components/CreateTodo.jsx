import { useState } from "react";

export function CreateTodo() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async function (res) {
        const json = await res.json();
        alert("Todo added");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
        alert("Failed to add todo");
      });
  };

  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Title"
        value={title}
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      />{" "}
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Description"
        value={description}
        onChange={function (e) {
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={handleAddTodo}
      >
        Add a Todo
      </button>
    </div>
  );
}
