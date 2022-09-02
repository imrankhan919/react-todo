import Todo from './Todo'

function ListGroup({todos , deleteTodo , editTodo}) {

  
  return (
    <ul className="list-group mt-5">
       {
        todos.map((todo)=>
        
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />

        )
       }
    </ul>
  )
}

export default ListGroup