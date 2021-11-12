import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
    {id: 1, completed: false, title: 'Апнуть грандмастера'},
    {id: 2, completed: false, title: 'Поднять бабла'},
    {id: 3, completed: false, title: 'Купить курсач'},
  ]

  return (
    <div className="wrapper">
      <h1>React Tutorial</h1>

      <TodoList todos={todos}></TodoList>
    </div>
  )
};

export default App;
