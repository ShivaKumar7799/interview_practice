import React from 'react'

function ObjectLooping() {
  let a = [{ABC : "Question 1"}, {XYZ : "Question 2"},{SGF : "Shiva"}];

  let newArr= []
  let i = 0;
  for(i of a){
    for(let j in i){
      newArr.push(i[j])
    }
  }
  let name = "vishnu";
  let CapName = []
  for(i=0; i< name.length;i++){
    if(i===0){
      CapName.push(name[i].toUpperCase())
    }else{
      CapName.push(name[i])
    }
  }
  let newName = CapName.toString()
  
  console.log()

  return (
    <div>
      {newArr.map((item) => <h1>{item}</h1>)}
      {<h1>Name : {newName.replaceAll(",","")}</h1>}
    </div>
  )
}

export default ObjectLooping