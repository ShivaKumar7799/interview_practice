import React, { useEffect, useState } from 'react'

function SessionManagement() {
  const [name,setName] = useState(localStorage.getItem("username")|| undefined)
  const removeUser = () => {
    localStorage.removeItem("username")
    setName("")
  }
  const nameChange = (event) => {
    setName(event.target.value)
  }
  return (
    <div>
      <input type="text" value = {name} onChange = {nameChange} />
      <button onClick={() => localStorage.setItem("username",name) } >Save User</button>
      <h2> UserName : {name} <button onClick={removeUser} >Remove</button> </h2> 
    </div>
  )
}

export default SessionManagement