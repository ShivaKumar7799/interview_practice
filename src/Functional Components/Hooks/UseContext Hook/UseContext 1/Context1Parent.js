import React from 'react'
import Context1Child from './Context1Child'
import { useContext } from 'react'
import { AppContext } from '../../../../App'

function Context1Parent() {
  const user = useContext(AppContext)
  return (
    <div>
      <h3> Name : {user.name} </h3> 
      <Context1Child />
    </div>
  )
}

export default Context1Parent