/*
  todos = [
    {
      title : Go to gym,
      description : you need to go to gym
    }
    ]
*/

export function Todos({todos}) {
  return (
    <div>
      {todos.map(function(todo) {
        return (
          <div key = {todo.title}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.completed == true ? "Completed" : "Mark as complete"} </button>
        </div>
        );
      })}
    </div>
  );
}