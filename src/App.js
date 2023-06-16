import logo from './logo.svg';
import './App.css';
import TodoList from './todoList';
import AddTodoForm from './AddTodoForm';
import { useState } from 'react';

const App = () => {

   const [newTodo, setNewTodo] = useState('')
  
  

  return (

     <div>
        <h1>React set up</h1>
        
         <TodoList />
         <AddTodoForm onAddTodo={setNewTodo} />
         <p>{newTodo}</p>
        
    </div>
    );
}
 

export default App;
