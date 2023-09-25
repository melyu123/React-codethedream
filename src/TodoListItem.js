import React from 'react';
import styles from './TodoListItem.module.css'


const TodoListItem = ({todo,onRemoveTodo, onEdit}) => {
  
  return ( 
    
      <li className={styles.ListItem}>{todo.title}
        <div>
          <button className={styles.remove} onClick={()=> onRemoveTodo(todo.id)}>Remove</button>
          <button className={styles.edit} onClick={()=>onEdit(todo.id)}>Edit</button>
        </div>
      </li>
      
    
    
   );
}
 
export default TodoListItem;