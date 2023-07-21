import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';


const AddTodoForm = ({onAddTodo}) => {

  const [todoTitle,setTodoTitle]= useState('');

  const handleTitleChange  =(event) =>{
      const newTodoTitle = event.target.value;
       setTodoTitle(newTodoTitle);
  }

 
 const handleAddTodo = (event) =>{
      event.preventDefault();

     
      const todoObj ={title:todoTitle, id:Date.now()};
      console.log(todoObj);
      
      onAddTodo( {title:todoTitle, id:Date.now()});
      


      setTodoTitle('');

      
      }

  return ( 
    <div>
       <form onSubmit={handleAddTodo}>
        <InputWithLabel  onChange={handleTitleChange} value={todoTitle} isFocused > <strong>Title:</strong> </InputWithLabel>
        <button> Add</button>
       </form>
    </div>
   );
}
 
export default AddTodoForm;