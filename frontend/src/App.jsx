import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  // Use useEffect to fetch todos when the component mounts
  useEffect(() => {
    // Fetch todos once when the component mounts
    fetch("http://localhost:3000/todos")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
