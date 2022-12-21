import React, {useState} from 'react'

function UseStateToggle() {
  const [name, setName] = useState("Shiva");
  const [toggle, setToggle] = useState(false);
  const showShivaName = () => {
    setName("Shiva");
    setToggle(!toggle)
  }
  const showKumarName = () => {
    setName("Kumar");
    setToggle(!toggle)
  }
  return (
    <div>
      {toggle ?  
        <button onClick={showShivaName} >{name}</button> :
        <button onClick={showKumarName} >{name}</button>
      }
      {
        toggle ? <h1>Kumar</h1> : <h1>Shiva</h1>
      }
    </div>
  )
}

export default UseStateToggle