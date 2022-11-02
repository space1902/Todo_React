import React from 'react';


function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue );

    React.useEffect(() => {
      setTimeout(() => {
        
      try{
        const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
    
      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      }else{
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem)
      setLoading(false);
      }
      catch(e){
        setError(true, e);
      }
      }, 2000);
    });
    

    const saveItem= (newItem) => {
      try {
        const stringfiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringfiedItem);
      setItem(newItem);
      }
      catch(e){
        
        setError(true, e);
      }
    }

    return {
      item,
      saveItem,
      loading,
      error,
    }
  }

  export {useLocalStorage};