import React, { useState } from 'react'
import ChildProp from './ChildProp'

function ParentProp() {
  const [count, setCount] = useState(3434);
  const incrementCount = () => {
    setCount(count + 1 )
  }
  return (
    <div>
      <h2>Parent Component</h2>
      {count}
      <ChildProp incrementCount = {incrementCount} />
    </div>
  )
}

export default ParentProp