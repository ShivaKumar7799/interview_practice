import React, { useState } from 'react'

function useHomeFuctions(count) {
  const [counter,setCounter] = useState(count)
  const increment = () => {
    setCounter(counter + 1)
  }
  return [increment,counter]
}

export default useHomeFuctions