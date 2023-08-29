import React, { useState, useEffect } from 'react';
import styles from './App.module.css'
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {



const [todoList, setTodoList] = useState([]);

const [isLoading, setIsLoading] = useState(true);

 const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/`;
 console.log(url)
 const fetchData = async() =>{
   
    const options = {method:'GET', headers:{'Authorization':`Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}};
    console.log(options)
     
     try {
      const response = await
         fetch(url, options);
         if (!response.ok) {
             const message = `Error: ${response.status}`;
             throw new Error(message);
           }

           const data = await response.json();
           
           const todos = data.records.map((todo)=>{
            const newTodo = {
              id: todo.id,
              title:todo.fields.title,
              todo:todo.fields.todo
            }

          return newTodo || [];

           });


           setTodoList(todos);
           setIsLoading(false);
           
          } catch (error) {
              console.log(error.message);
              
    }

     
     
}

  useEffect(()=>{

    fetchData()},[]);



 
       useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));

    };
     },[todoList,isLoading]);


 function removeTodo(id) {
         setTodoList(todoList.filter((todo) => todo.id !== id));
     }

  

  const addTodo =(newTodo)=>{
    setTodoList([...todoList,newTodo]);

  }

  return (
    <>
    <BrowserRouter>
    
    <div className={styles.content}>
        <Routes >
      
          <Route path='/' element={<> <h1 className={styles.title}>Todo List</h1>
          <AddTodoForm onAddTodo={addTodo} />
          {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/> }</>} ></Route>
          <Route path='/new' element={<h1>New Todo List</h1>}></Route>
          <Route >
            
          </Route>
      
    </Routes>
    </div>
  
       
        

    </BrowserRouter>
        
    </>
  );
}

export default App;
