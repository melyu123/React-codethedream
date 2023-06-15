import React from 'react';

const TodoList = () => {
  const todoList = [{id:1,title:'React-lesson-1',content:'Project Setup',bookName:'Road to React'},
                    {id:2,title:'React-lesson-2',content:'JSX in React',bookName:'Road to React'},
                    {id:3, title:'React-lesson-3',content:'React components',bookName:'Road to React'}
                  ];

  const list = todoList.map(item=>{ 
           return (
                      <li key={item.id}>
                          <span>{item.title}</span> 
                          <span>{item.content}</span>
                          <span>{item.bookName}</span>
                      </li>
             )
          });
  return ( 
    <ul>
        {list}
    </ul>
   );
}
 
export default TodoList;