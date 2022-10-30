//import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoTitle } from './TodoTitle';

const defaultTodo = [{text:"Cortar cebolla", completed:false},
              {text:"Picar cebolla", completed:false},
              {text:"Cocinar cebolla", completed:true}];

function App() {

  const [todos, setTodos] = React.useState(defaultTodo);
  const [serchValue, setserchValue] = React.useState('');
  const completeTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = [];


  if (!serchValue.length >= 1){
    searchTodos = todos;

  }else{
    searchTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = serchValue.toLowerCase();

    return todoText.includes(searchText);
    
  });
  }

  return (
    <React.Fragment>
      <TodoTitle/>
      <TodoCounter
        total={totalTodos}
        completed={completeTodos}
        />
      {/* <h2>Has completado 2 todo</h2> */}

      <TodoSearch
        serchValue={serchValue}
        setserchValue={setserchValue}/>
      {/* <input placeholder="cebolla" /> */}
        <TodoList> 
        {searchTodos.map(todos => (
          <TodoItem 
            key={todos.text} 
            text={todos.text}
            completed={todos.completed}/>
        ))}
      </TodoList>

      {/* <CreateTodoButton/> */}
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
