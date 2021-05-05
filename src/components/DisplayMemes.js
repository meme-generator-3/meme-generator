import React from 'react'

export default function DisplayMemes(props) {
  return (
    <div>
      hello
      <h1>{props.name}</h1>
      <img src={props.url} alt="memes"></img>
    </div>
  )
}
