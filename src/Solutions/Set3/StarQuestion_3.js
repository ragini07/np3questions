import React, { useState } from 'react'


function StarQuestion_3() {
    const [todoList , setToDoList] = useState([])
    const [input , setInput] = useState("")

    const addToDoHandler = () => {
        setToDoList(todoList => [...todoList,{title : input , isCompleted :false}])
        setInput("")
    }
    
    const updateToDoHandler = (title) => {
         const updatedToDo =  todoList.map(el => {
            if(el.title === title)
                return {...el , isCompleted : !el.isCompleted}
            return el
        })
        setToDoList(updatedToDo)
    }

  return (
   <>
   <div>To Dos App</div>
   <input 
   value={input}
   onChange={(e) => setInput(e.target.value)}
   type="text"/>
    <button
    onClick={addToDoHandler}>Add</button>
    {
        todoList.map(({title , isCompleted}) => {
            return <div style={{textDecoration : `${isCompleted ? "line-through" : "none"}`}}
            onClick={() => updateToDoHandler(title)}>{title}</div>
        })
    }
   </>
  )
}

export {StarQuestion_3}