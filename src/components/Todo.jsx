import React from 'react'

function Todo({todo , deleteTodo , editTodo}) {
  
  const handleDelete = (id) => {
    deleteTodo(id)
  }
  
  const handleEdit = (item) =>{
    editTodo({ todo : item , isEdit : true })
  }
  
  return (
    <li className="list-group-item">{todo.text}
    
    <button className="btn btn-warning rounded-0 float-end" onClick={() => handleEdit(todo)}>Edit</button>
    <button className="btn btn-danger rounded-0 float-end" onClick={() => handleDelete(todo.id)} >Delete</button>
    
    </li>
  )
}

export default Todo