import React from 'react'

function ChildProp({incrementCount}) {
  return (
    <div>
      <hr />
      <h2>Child Component</h2>
      <button onClick={() => incrementCount()} > Increment </button>
    </div>
  )
}

export default ChildProp