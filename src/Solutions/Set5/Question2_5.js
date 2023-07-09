import {useState} from 'react'
import {data} from './data'

function Question2_5() {
  const [updatedData , setUpdatedData] = useState(data)
  const [inputData , setInputData] = useState({id : "" , price : ""})

  const submitHandler = () => {
   const newData = updatedData.map(el => el.id === Number(inputData.id) ? {...el, price : Number(inputData.price)}  : el)
   setUpdatedData(newData)
  }
  return (
      <>
      {/* <label>
        Id : 
        <input
        value={inputData.id}
        onChange={(e) => setInputData({...inputData , id : e.target.value})}
      type="number"/>
      </label> */}
      <label>
        Id : 
        <select
        onChange={(e) => setInputData({...inputData , id : e.target.value})}>
          {
            updatedData.map(({id}) => <option>{id}</option>)
          }
        </select>
      </label>
      <label>
        Price : 
        <input
          value={inputData.price}
          onChange={(e) => setInputData({...inputData , price : e.target.value})}
      type="number"/>
      </label>
      <button
      onClick={submitHandler}>Submit</button>
  
      {
        updatedData.map(({id , name ,price}) => {
          return (<>
          <div key={id}>
            <span>{id}:</span>
            <span>{name}</span>
            <span>{price}</span>
          </div>
          </>)
        })
      }
      </>
  )
}

export  {Question2_5}