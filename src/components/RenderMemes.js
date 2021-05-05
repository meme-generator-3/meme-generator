import React, { Component } from 'react'
import DisplayMemes from './DisplayMemes'
import axios from 'axios'


export default class RenderMemes extends Component {
  constructor(){
    super()
    this.state={
      meme:[]
    }
  }
 

  componentDidMount(){
    axios.get("https://api.imgflip.com/get_memes")
    .then(response => {
      const data = response.data.data.memes;
      this.setState({meme: data}
    )
  })
  }

  render() {
   return (
    <div>
      {this.state.meme.map(meme => {
      return <DisplayMemes key={meme.id} name={meme.name} url={meme.url}/>
    })}
    </div>
    )
  }
}
