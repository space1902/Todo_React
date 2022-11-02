import React from "react";
import {useLocalStorage} from './UseLocalStorage'

const TodoContext = React.createContext();

function TodoProvider(props) {

    
  const {
    item : todos,
    saveItem: saveTodos,
    loading,
    error,} = useLocalStorage('Todos_V1', []);

    const [serchValue, setserchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
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

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            serchValue,
            setserchValue,
            searchTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};