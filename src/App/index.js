//import './App.css';
import React from 'react';
import {AppUi} from "./AppUi";

/* const defaultTodo = [{text:"Cortar cebolla", completed:false},
              {text:"Picar cebolla", completed:false},
              {text:"Cocinar cebolla", completed:true}]; */

  function useLocalStorage(itemName, initialValue) {

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
  
    if(!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify([]));
      parsedItem = [];
    }else{
      parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem );

    const saveItem= (newItem) => {
      const stringfiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringfiedItem);
      setItem(newItem);
    }

    return [
      item, saveItem
    ]
  }
  
  

function App() {

  const [todos, saveTodos] = useLocalStorage('Todos_V1', []);

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

  console.log('Render antes del useEffect');
  
  React.useEffect(() => {
    console.log('use effect ejecutandose');
  });

  console.log('Render despues del useEffect');

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
