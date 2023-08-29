import React from 'react';
import styles from './TodoListItem.module.css'


const TodoListItem = ({todo,onRemoveTodo}) => {
  
  return ( 
    <li className={styles.ListItem}>{todo.title}<button className={styles.remove} onClick={()=> onRemoveTodo(todo.id)}>Remove</button></li>
   );
}
 
export default TodoListItem;