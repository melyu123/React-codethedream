import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const useSemiPersistentState = ()=>{
  const [todoList, setTodoList]= useState([]);

   useEffect(()=>{

     localStorage.setItem('savedTodoList', JSON.stringify(todoList));
     JSON.parse(localStorage.getItem('savedTodoList'));
     
     },[todoList]);

     return [todoList,setTodoList]
};

function App() {


const [todoList,setTodoList] = useSemiPersistentState();
  

  const addTodo =(newTodo)=>{
    setTodoList([...todoList,newTodo]);

  }

  return (
    <>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList}/>
        
        
    </>
  );
}

export default App;
