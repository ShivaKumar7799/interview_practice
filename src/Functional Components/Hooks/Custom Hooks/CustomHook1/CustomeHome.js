import React, {useState} from 'react'
import './useFetch'
import useFetch from './useFetch'
import useHomeFuctions from './useHomeFuctions'
function CustomeHome() {
  const [increment, counter] = useHomeFuctions(23232);
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>
      {data && data.map((item,index) => <p key={index} >{item.title}</p>)}
      {counter}
      <button onClick={() => increment()} >  inc</button>
    </div>
  )
}

export default CustomeHome