import React from 'react'

export default function CreateMeme(props) {

  const handleEdit=(e)=>{
    console.log('edit')
  }

  const handleDelete=(e)=>{
    console.log('delete')
  }
  
  return (
    <div>
      <h1>{props.firstVal} {props.secondVal}</h1>
      <img src={props.img}></img>
      <button 
      onClick={handleEdit}
      className="refresh-button">Edit</button>
      <button 
      onClick={handleDelete}className="make-meme-button">Delete</button>
    </div>
  )
}
