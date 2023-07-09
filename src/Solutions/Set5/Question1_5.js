import {useState} from 'react'
import {data} from './data'

function Question1_5() {

    const [sortedData , setSortedData] = useState(data)

    const sortAscHandler = () => {
        const newData =  [...sortedData].sort((a,b) => a.price - b.price)  
        setSortedData([...newData])
    }
    const sortDesHandler = () => {
        const newData =  [...sortedData].sort((a,b) => b.price - a.price)  
        setSortedData([...newData])
    }

  return (
    <>
    <button
    onClick={sortAscHandler}>Sort Asc</button>
    <button
     onClick={sortDesHandler}>Sort Des</button>
    {
        sortedData.map(({id , name , price}) => {
            return (<>
            <div key={id}>
                <span>{id}.</span>
                <span>{name}-</span>
                <span>{price}</span>
            </div>
            </>)
        })
    }
    </>
  )
}

export {Question1_5}