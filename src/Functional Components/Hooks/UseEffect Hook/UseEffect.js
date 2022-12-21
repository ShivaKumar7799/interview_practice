import React,{useEffect, useState} from 'react'

function UseEffect() {
  const [count,setCount] = useState(0);
  useEffect(() => {
    console.log(count,"useEffect Called");
    return () => {
      console.log("Dom Removed")
    }
  },[count])
  return (
    <div>
      count : {count}
      <button onClick={() => setCount(count + 1)} >Click</button>
    </div>
  )
}

export default UseEffect