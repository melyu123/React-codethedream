import React from 'react';
import TodoListItem from './TodoListItem';
import styles from  './todoList.module.css'



const TodoList = ({todoList,onRemoveTodo, onclear, onEdit}) => {
 
  return ( 
      <div className={styles.listContainer}>
       <ul className={styles.todos}>
          {todoList?
          todoList.map(item => <TodoListItem  key={item.id} todo={item} onRemoveTodo={onRemoveTodo} onEdit={onEdit}/>):
          <p className={styles.info}>Plead add a todo list</p>
        }
                        
        </ul>
        <div className={styles.clear}  onClick={()=>onclear()}><button>clear all</button></div>
      </div>
     
   
   );
}
 
export default TodoList;
