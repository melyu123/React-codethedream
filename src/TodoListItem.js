import React from 'react';

const TodoListItem = ({todo:{title,content, bookName}}) => {
  
  return ( 
    
       <li >
            <span>{title}</span> 
            <span>{content}</span>
            <span>{bookName}</span>
         </li>
    
   );
}
 
export default TodoListItem;