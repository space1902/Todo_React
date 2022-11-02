//import './App.css';
import React from 'react';
import {AppUi} from "./AppUi";
import {TodoProvider} from "../TodoContext";

/* const defaultTodo = [{text:"Cortar cebolla", completed:false},
              {text:"Picar cebolla", completed:false},
              {text:"Cocinar cebolla", completed:true}]; */

function App() {


  return (
    <TodoProvider>
    <AppUi/>
    </TodoProvider>
  );
}

export default App;
