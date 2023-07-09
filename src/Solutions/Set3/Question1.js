import React, { useState } from 'react'

function Question1_3() {
    const [input , setInput] = useState("")
    const [showMsg , setShowMsg] = useState(false)

    const inputHandler = (e) => {
        setInput(e.target.value)
        if(!e.target.value)
            setShowMsg(prev => !prev)
    }
    const showMsgHandler= () => {
        setShowMsg(prev => !prev)
    }
  return (
    <>

    <input
    value={input}
    onChange={(e) => inputHandler(e)}
    type="text"></input>
    <button
    onClick={showMsgHandler}>Show Welcome message</button>
   {showMsg && <div>{`${input.length %2 === 0 ? 'Hi' : 'Hello'}  ${input}`}</div>}
    </>
  )
}

export {Question1_3}