import React, {useState, useMemo} from 'react'

function UseMemo1() {
  const [count,setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, "New Todo"])
  }
  const calculation = useMemo(() => expensiveCalculation(count),[count])

  const increment = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h2>Todos</h2>
      {todos.map((todo,index) => {
        return <p key={index} >{todo}</p>
      })}
      <button onClick={addTodo} >Add Todo</button>
      <hr />
      <div>
        Count : {count}
        <button onClick={increment} >+</button>
        <h3>Expensive Calculation : {calculation} </h3>
      </div>
    </div>
  )
}

const expensiveCalculation = (num) => {
  console.log("Calculating");
  for(let i=0; i< 1000000000; i++){
    num += 1
  }
  console.log("done")
  return num
}

export default UseMemo1