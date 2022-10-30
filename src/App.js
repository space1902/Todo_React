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

  const [todo, setTodos] = React.useState(defaultTodo);
  const [serchValue, setserchValue] = React.useState('');
  const completeTodo = todo.filter(todos => !!todos.completed).length;
  const totalTodo = todo.length;

  let searchTodos = [];


  if (searchTodos.length >= 1){
    
  }else{
    searchTodos = todo;
  }
  return (
    <React.Fragment>
      <TodoTitle/>
      <TodoCounter
        total={totalTodo}
        completed={completeTodo}
        />
      {/* <h2>Has completado 2 todo</h2> */}

      <TodoSearch
        serchValue={serchValue}
        setserchValue={setserchValue}/>
      {/* <input placeholder="cebolla" /> */}
        <TodoList> 
        {searchTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}/>
        ))}
      </TodoList>

      {/* <CreateTodoButton/> */}
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
