import React from 'react';

const TodoListItem = (props) => {
  const todo = props.todo
  return ( 
    
       <li >
            <span>{todo.title}</span> 
            <span>{todo.content}</span>
            <span>{todo.bookName}</span>
         </li>
    
   );
}
 
export default TodoListItem;