import React, { useEffect, useState } from 'react'
export const data = [
    {
      id: 1,
      item: "shoes",
          price: 100,
          quantity: 1
    },
  {
      id: 2,
      item: "jacket",
          price: 400,
          quantity: 1
    },
  {
      id: 3,
      item: "hat",
          price: 50,
          quantity: 1
    },
  {
      id: 4,
      item: "sunglasses",
          price: 250,
          quantity: 1
    },
  {
      id: 5,
      item: "gloves",
          price: 300,
          quantity: 1
    },
  
  ];
function Question2() {

    const [updatedData , setUpdatedData] = useState(data)
    const [totalPrice , setTotalPrice] = useState("")

    useEffect(() => {

       const newTotal = updatedData.reduce((acc,curr) => acc+(curr.price*curr.quantity),0)
        setTotalPrice(() => newTotal)
    },[updatedData])

    const increaseHandler = (id) => {
     const newData = updatedData.map(el => {
            if(el.id === id)
                return {...el , quantity : el.quantity+1}
            return el
        })
    setUpdatedData(newData)
    }
    const decreaseHandler = (id) => {
        const newData = updatedData.map(el => {
               if(el.id === id)
                   return {...el , quantity : el.quantity-1}
               return el
           })
       setUpdatedData(newData)
       }
  return (<>
    {
        updatedData.map(({id ,item ,price,quantity}) => {
            return (
                <div key={id}>
                <span>{item} -</span>
                <span>{price} :</span>
                <button
                disabled={quantity === 1}
                onClick={() => decreaseHandler(id)}>-</button>
                <span>{quantity}</span>
                <button
                onClick={() => increaseHandler(id)}>+</button>
                </div>
            )
        })
    }
    <div>TotalPrice : {totalPrice}</div>
    </>
  )
}

export { Question2}