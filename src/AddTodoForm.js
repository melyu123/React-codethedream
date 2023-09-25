import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import styles from './AddTodoForm.module.css'






const AddTodoForm = ({editing,  handleTitleChange,handleAddTodo, todoTitle}) => {


   return ( 
    <div >
       <form onSubmit={handleAddTodo} className={styles.inputTodos}>
        <InputWithLabel   onChange={handleTitleChange} value={todoTitle} isFocused > <strong>Title:</strong> </InputWithLabel>
        {editing?<button className={styles.edit}>Edit</button>:<button className={styles.add}> Add</button>}
    </form>

    </div>
   );
}
 
export default AddTodoForm;