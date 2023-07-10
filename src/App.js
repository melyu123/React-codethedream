import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const useSemiPersistentState = ()=>{

 const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('savedTodoList')) || []
  );



   useEffect(()=>{

     localStorage.setItem('savedTodoList', JSON.stringify(todoList));
     JSON.parse(localStorage.getItem('savedTodoList'));
     
     },[todoList]);

     return [todoList,setTodoList]
};

function App() {


const [todoList,setTodoList] = useSemiPersistentState();

const removeTodo = (id)=>{
   const newList = todoList.filter(item =>
    id !== item.id
   );
   setTodoList(newList);
}
  

  const addTodo =(newTodo)=>{
    setTodoList([...todoList,newTodo]);

  }

  return (
    <>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
        
        
    </>
  );
}

export default App;
