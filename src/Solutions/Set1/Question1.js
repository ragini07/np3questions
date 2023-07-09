import {useState} from 'react'

const data = [
    {
      id: 1,
      item: "shoes",
          price: 100,
    },
  {
      id: 2,
      item: "jacket",
          price: 400,
    },
  {
      id: 3,
      item: "hat",
          price: 50,
    },
  {
      id: 4,
      item: "sunglasses",
          price: 250,
    },
  {
      id: 5,
      item: "gloves",
          price: 300,
    },
  
  ];

function Question1() {

    const [lowerLimit , setLowerLimit] = useState("")
    const [upperLimit , setUpperLimit] = useState("")
    const [filterData , setFilteredData] = useState(data)
  
  
    const filterHanlder =(e) => {
      setUpperLimit(e.target.value)
      if(e.target.value){
        const newData = data.filter(item => item.price>= lowerLimit && item.price <=e.target.value)
        setFilteredData(newData)
      }
      else  
        setFilteredData(data)
    
  
    }


  return (
    <>
          <label>
      Lower Limit :
      <input
      value={lowerLimit}
      onChange={(e) => setLowerLimit(e.target.value)}
     type="number"/>
      </label>
      <br/>
      <label>
        Upper Limit :
      <input
      value={upperLimit}
      onChange={(e) =>filterHanlder(e)}
     type="number"/>
      </label>
      {
        filterData.map(({id,item,price}) => {
          return (<div key={id}>
            <span>{item} :</span>
            <span>{price}</span>
          </div>)
        })
      }
    </>
  )
}

export { Question1}