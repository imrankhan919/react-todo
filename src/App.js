import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'

function App() {
  
  const [todos, setTodos] = useState([])
  
  const [updTodo , setUpdTodo] = useState({
    todo : {},
    isEdit : false
  })

  // Save Todo

  const saveTodo = (item) =>{
    const newTodo = {
      text : item , 
      id : uuidv4()
    }

    setTodos([...todos , newTodo])

  }


  // Delete Todo

  const deleteTodo = (id) => {
    
    setTodos(todos.filter((todo)=>{
        if(todo.id !== id ){
          return true
        }
    }))

  }


  // Update Todo

  function updateTodo(id , updatedTodo){ 

    setTodos(todos.map((item)=>
      item.id === id ? {...item,text:updatedTodo} : item
    ))

    setUpdTodo(
      {
        todo : {},
        isEdit : false,
      }
      )


  }


  


  // Edit Todo State Function

  const editTodo = (item) =>{
    setUpdTodo(item)
  }


  
  return (
    <div>
    <Navbar/>
    <div className="container mt-5">
      <Form saveTodo={saveTodo} updTodo={updTodo} updateTodo={updateTodo}/>
      <ListGroup todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
    </div>
  );
}

export default App;
