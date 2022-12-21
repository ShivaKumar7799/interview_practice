import React,{useState} from 'react'

function SearchFilter() {
  const [query,setQuery] = useState("")
  const fruits = ["apple", 'banana', 'grapes',"papaya", "orange"];
  const changeQuery = (event) => {
    setQuery(event.target.value)
  }
  const searchedFruits = fruits.filter((item,index) => item.toLowerCase().includes(query.toLowerCase()))
  return (
    <div>
      <h1>Fruits</h1>
      <input type="text" value={query} onChange = {changeQuery} />
      {searchedFruits.map((fruit,index) => <h2 key={index} > {index + 1}. {fruit}</h2>)}
    </div>
  )
}

export default SearchFilter