import React, { useState, useEffect } from 'react';
import styles from './App.module.css'
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {


const [todoList, setTodoList] = useState([]);

const [isLoading, setIsLoading] = useState(true);

const [editing, setEditing] = useState(false);

const [todoTitle,setTodoTitle]= useState('');
const [editID, setEditID] = useState(null);

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

  const clearall =()=>{
    setTodoList('');
  }

  const edit=(id)=>{
    
       const selectItem = todoList.find(item =>item.id ===id);
       setEditing(true);
       setEditID(id)
       setTodoTitle(selectItem.title)
 }

  const handleTitleChange  =(event) =>{

      const newTodoTitle = event.target.value;
       setTodoTitle(newTodoTitle);
  }

 
 const handleAddTodo = (event) =>{
      event.preventDefault();

      if(!todoTitle){

      }else if(todoTitle && editing){
        console.log(todoList)
        setTodoList(
        todoList.map(item => {
            
        if(item.id === editID){
          return {...item, title:todoTitle}
         }
          return item
        })
        )
        setTodoTitle('');
        setEditID(null);
        setEditing(false);
        
      }else {
        const todoObj ={title:todoTitle, id:Date.now()};
        
        addTodo( {title:todoTitle, id:Date.now()});
        setTodoTitle('');

      }
 }
     
 return (
    <>
    <BrowserRouter>
    
    <div className={styles.content}>
        <Routes >
      
          <Route path='/' element={<> <h1 className={styles.title}> My Todo List App</h1>
          <AddTodoForm todoTitle={todoTitle} editing={editing}  handleTitleChange={ handleTitleChange} handleAddTodo={handleAddTodo}/>
          {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} onclear={clearall} onEdit={edit}/>  }</>} ></Route>
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
