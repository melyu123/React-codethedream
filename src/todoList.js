import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [{id:1,title:'React-lesson-1',content:'Project Setup',bookName:'Road to React'},
                    {id:2,title:'React-lesson-2',content:'JSX in React',bookName:'Road to React'},
                    {id:3, title:'React-lesson-3',content:'React components',bookName:'Road to React'}
                  ];

const TodoList = () => {
  

  

  return ( 
    <ul>
        {todoList.map(item => <TodoListItem key={item.id} todo={item}/>)}
    </ul>
   );
}
 
export default TodoList;