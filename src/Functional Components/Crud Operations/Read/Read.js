import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Read.css'

function Read() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then(resp => console.log(resp.data))
  },[])

  const deletePost = (id) => {
    console.log(id,"post deleted")
    let updatedData = data.filter((post) => post.id !== id );
    setData(updatedData)
  }


  return (
    <div>
      <h1>Posts:</h1>
      {data && data.map((post,index) => <div key={index} > {post.id}. {post.title} <button onClick={() => deletePost(post.id)} >Delete</button> </div>)}
      <div className='divContainer' >
        <div><h1>first</h1></div>
        <div className='second' ><h1>Second</h1></div>
        <div><h1>Third</h1></div>
        <div className='fourth' ><h1>Fourth</h1></div>
        <div><h1>Fifth</h1></div>
      </div>
    </div>
  )
}

export default Read