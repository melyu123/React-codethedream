import React from 'react';
import TodoListItem from './TodoListItem';
import styles from  './todoList.module.css'



const TodoList = ({todoList,onRemoveTodo}) => {
  return ( 
    
      <ul className={styles.todos}>
          {todoList.map(item => <TodoListItem  key={item.id} todo={item} onRemoveTodo={onRemoveTodo}/>)}
                        
        </ul>
   
   );
}
 
export default TodoList;