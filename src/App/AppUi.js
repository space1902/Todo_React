import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoTitle } from '../TodoTitle';


function AppUi({
    totalTodos,
    completedTodos,
    serchValue,
    setserchValue,
    searchTodos,
    completeTodo,
    deleteTodo,
}
){
    return (
        
    <React.Fragment>
    <TodoTitle/>
    <TodoCounter
      total={totalTodos}
      completed={completedTodos}
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
          completed={todo.completed} 
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}/>
      ))}
    </TodoList>

    {/* <CreateTodoButton/> */}
    <CreateTodoButton/>
  </React.Fragment>

    );
}

export  {AppUi};