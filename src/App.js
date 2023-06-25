import logo from './logo.svg';
import './App.css';
import TodoList from './todoList';
import AddTodoForm from './AddTodoForm';
import { useState } from 'react';

/* 
const todoList = [{id:1,title:'React-lesson-1',content:'Project Setup',bookName:'Road to React'},
                    {id:2,title:'React-lesson-2',content:'JSX in React',bookName:'Road to React'},
                    {id:3, title:'React-lesson-3',content:'React components',bookName:'Road to React'}
                  ]; */


const App = () => {

    const [todoList, setTodoList] = useState([]);

    const addTodo =(newTodo)=>{

       setTodoList([...todoList, newTodo]);
       console.log(todoList);
      
   };

   const newTodoList = todoList.map(item => item.title);
   
  
  

  return (

     <div>
        <h1>React </h1>
        <hr />
        <TodoList todoList={todoList}/>
        <AddTodoForm onAddTodo={addTodo} />
        <p>{newTodoList}</p>
    </div>
    );
}
 

export default App;
