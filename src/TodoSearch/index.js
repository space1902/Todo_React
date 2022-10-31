import React from "react";
import './TodoSearch.css';

function TodoSearch({serchValue, setserchValue}){

    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        setserchValue(event.target.value);
    };
    return(
        <input className="TodoSearch" 
        placeholder="cebolla"
        value={serchValue} 
        onChange={onSearchValueChange}/>
    );
}

export {TodoSearch}