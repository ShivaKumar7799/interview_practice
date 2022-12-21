import React, { useContext } from 'react'
import { AppContext } from '../../../../App'

function Context1Child() {
  const {name, setName} = useContext(AppContext)
  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  return (
    <div>
      <h1> changeName : <input type="text" value={name} onChange = {handleNameChange} /> </h1>
    </div>
  )
}

export default Context1Child