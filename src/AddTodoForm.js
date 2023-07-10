import React, { useState } from 'react';


const AddTodoForm = ({onAddTodo}) => {

  const [todoTitle,setTodoTitle]= useState('');

  const handleTitleChange  =(event) =>{
      const newTodoTitle = event.target.value;
       setTodoTitle(newTodoTitle);
  }

 
 const handleAddTodo = (event) =>{
      event.preventDefault();
      const todoObj = {title:todoTitle, id:Date.now()}


      console.log(todoObj )

      onAddTodo({title: todoTitle, id: Date.now()});

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