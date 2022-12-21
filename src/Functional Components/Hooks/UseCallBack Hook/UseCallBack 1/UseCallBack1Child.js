import React, { memo } from 'react'

function UseCallBack1Child({addTodo,todos}) {
  console.log("child rendered");
  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default memo(UseCallBack1Child)