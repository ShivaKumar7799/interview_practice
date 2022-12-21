import React, { useState } from 'react'
import PropTypeChild from './PropTypeChild'
function PropTypeParent() {
  const [name, setName] = useState("Shiva kumar")
  return (
    <div>
      <h1>PropTypeParent</h1>
      <PropTypeChild name ={name} age = {20} />
    </div>
  )
}

export default PropTypeParent