import {useState} from 'react'
import {productsData} from './data'

function Question1_4() {

  const [data , setData] = useState(productsData)
  const [categoryInput , setCategoryInput] = useState("")
  const [productData , setProductData] = useState({category : "", product : ""})

  const isAlreadyCategory = (categoryInput) => data.some(el => el.category.toLowerCase() === categoryInput.toLowerCase())

  const isAlreadyProduct = (products , product) => products.some(el => el.toLowerCase() === product.toLowerCase())

  const addCategoryHandler =() =>{
   if(!isAlreadyCategory(categoryInput)) {
    setData(data => [...data , {category : categoryInput , products : []}])
    setCategoryInput("")
   }
   else{
     console.log("already hai category")
   }

  }

  const addProductHandler = () => {
   const newData = data.map(el => {
      if(el.category.toLowerCase() === productData.category.toLowerCase()){
        if(!isAlreadyProduct(el.products , productData.product))
          return {...el , products : [...el.products , productData.product]}
        return el
      }
       
      return el
    })
    setData([...newData])
  }
  return (
    <>
    <input
    value={categoryInput}
    onChange={(e) => setCategoryInput(e.target.value)}
    type="text"
    placeholder='category'/>
    <button
    onClick={addCategoryHandler}>Add category</button>
    <select
    onChange={(e) => setProductData({...productData , category : e.target.value})}>
      {
        data.map(({category}) => <option>{category}</option>)
      }
    </select>
    <input
    type="text"
    value={productData.product}
    onChange={(e) => setProductData({...productData , product : e.target.value})}
    placeholder='product name'/>
     <button
    onClick={addProductHandler}>Add Product</button>
    {
      data.map(({category , products}) => {
        return (
          <>
          <h3>{category}</h3>
          {
            products.map(product => <div>{product}</div>)
          }
          <hr></hr>
          </>
        )
      })
    }
    </>
  )
}

export { Question1_4}