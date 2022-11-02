import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoTitle } from '../TodoTitle';
import { Modal } from '../Modal';


function AppUi(){
  const {
    error,
    loading,
    searchTodos,
    completeTodo,
    deleteTodo} = React.useContext(TodoContext);

    return (
        
    <React.Fragment>
    <TodoTitle/>
    <TodoCounter/>

    <TodoSearch/>
     
        <TodoList> 
          {error && <p>Desesperate hubo un error</p>}
          {loading && <p>Estamos cargando no desesperes...</p>}
          {(!loading && !searchTodos.length) &&  <p>Crea tu primer todo</p>}
 
          {searchTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed} 
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}/>
          ))}
        </TodoList>

            <Modal>
              <p>Esto se debe ver</p>
            </Modal>

    <CreateTodoButton/>
  </React.Fragment>

    );
}

export  {AppUi};