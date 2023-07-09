import  { useState } from 'react'
export const data = [
    {
      id: 1,
      item: "JavaScript"
    },
    {
      id: 2,
      item: "Python"
    },
    {
      id: 3,
      item: "Scala"
    },
    {
      id: 4,
      item: "Solidity"
    },
    {
      id: 5,
      item: "C++"
    }
  ];
function Question2_2() {
    const [filteredData , setFilteredData] = useState(data)

    const isInList = (id) => filteredData.some(el => el.id === id)

    const removeHandler =(id) => {
       const newData = filteredData.filter(el => el.id !== id)
       setFilteredData(() => [...newData])
    }

    const undoHandler = (id,item) => {
        setFilteredData(() => [...filteredData , {id , item}])
    }
  return (
   <>
   {
       data.map(({id,item}) => {
           return (<>
           <div key={id}>
           <span>{item}</span>
          {isInList(id) && <button 
           onClick={() => removeHandler(id)}>Remove</button>}
           {!isInList(id) && <button
           onClick={() => undoHandler(id,item)}>Undo Remove</button>}
           </div>
           </>)
       })
   }
   </>
  )
}

export {Question2_2}