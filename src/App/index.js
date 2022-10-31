//import './App.css';
import React from 'react';
import {AppUi} from "./AppUi";

/* const defaultTodo = [{text:"Cortar cebolla", completed:false},
              {text:"Picar cebolla", completed:false},
              {text:"Cocinar cebolla", completed:true}]; */

function App() {

  const localStorageTodo = localStorage.getItem('Todos_V1');
  let parsedTodo;

  if(!localStorageTodo){
    localStorage.setItem('Todos_V1', JSON.stringify([]));
    parsedTodo = [];
  }else{
    parsedTodo = JSON.parse(localStorageTodo);
  }

  const [todos, setTodos] = React.useState(parsedTodo);
  const [serchValue, setserchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
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

  const saveTodos = (newTodos) => {
    const stringfiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('Todos_V1', stringfiedTodos);
    setTodos(newTodos);
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];  
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];  
    newTodos.splice(todoIndex, todoIndex + 1);
    saveTodos(newTodos);
  };

  return (
    <AppUi
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      serchValue={serchValue}
      setserchValue={setserchValue}
      searchTodos={searchTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      />
  );
}

export default App;
