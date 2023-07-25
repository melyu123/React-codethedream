import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';



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

          return newTodo;

           });


           setTodoList(todos);
           setIsLoading(false);
           
          } catch (error) {
              console.log(error.message);
              
    }

     
     
}

  useEffect(()=>{
    fetchData()}
     /* new Promise((resolve, reject)=>{
       setTimeout(
      () => resolve({ data: { todoList:  JSON.parse(localStorage.getItem('savedTodoList')) || [] } }),
      2000
    )
     }).then((result)=>{
      setTodoList(result.data.todoList);
      setIsLoading(false);
     });
    
  } */,[]);

   useEffect(()=>{
    if (!isLoading){
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
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/> }
        

        
        
    </>
  );
}

export default App;
