import {useEffect, useState} from 'react'


function Form({saveTodo , updTodo , updateTodo}) {
  
  const [formValue, setFormValue] = useState("")


  useEffect(()=>{
    setFormValue(updTodo.todo.text)    
  },[updTodo])



  const handleSubmit = (e) =>{
    e.preventDefault()
    
    if(formValue === " "){
      window.alert("Enter Something")

    }
    
    if(updTodo.isEdit === true){

      updateTodo(updTodo.todo.id , formValue)

    }else{
      saveTodo(formValue)
    }

    setFormValue('')

  }
  
  const handleChange = (e) =>{
    setFormValue(e.target.value)
  }
  
  return (
    <form onSubmit={(e) => handleSubmit(e) }>
  <div className="mb-3">
    
    <input value={formValue} type="text" className="form-control rounded-0" onChange={(e)=>handleChange(e)}/>
  </div>

  
  <button type="submit" className="btn btn-primary rounded-0 w-100">Submit</button>
</form>
  )
}

export default Form