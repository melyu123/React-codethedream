import React, { useState } from 'react';

const AddTodoForm = (props) => {

   const [inputData, setInputData] = useState('')

   const inputDataHandler =(e)=>{
       setInputData(e.target.value)
   }

   

  const handleAddTodo = (event)=> {
      event.preventDefault();
      const todoTitle = inputData
      console.log(todoTitle )

      props.onAddTodo(todoTitle)

      setInputData('')
     } 

  return ( 
    <div>
       <form onSubmit={handleAddTodo}>
        <label htmlFor='todoTitle'>Title</label>
        <input id='todoTitle' name="title" onChange={inputDataHandler} value={inputData} ></input>
        <button> Add</button>
       </form>
    </div>
   );
}
 
export default AddTodoForm;