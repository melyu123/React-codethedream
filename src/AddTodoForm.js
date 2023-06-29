import React, { useState } from 'react';

const AddTodoForm = ({onAddTodo}) => {

  const [todoTitle,setTodoTitle]= useState('');

  const handleTitleChange  =(event) =>{
       
        setTodoTitle(event.target.value);
  }

 
 const handleAddTodo = (event) =>{
      event.preventDefault();

     
      const newTodo = {
        title:todoTitle,
        id: Date.now(),
      };
      console.log(newTodo)

      onAddTodo(newTodo);

      setTodoTitle('');

      
      }

  return ( 
    <div>
       <form onSubmit={handleAddTodo}>
        <label htmlFor='todoTitle'>Title</label>
        <input id='todoTitle' name="title"  onChange={handleTitleChange} value={todoTitle} ></input>
        <button> Add</button>
       </form>
    </div>
   );
}
 
export default AddTodoForm;