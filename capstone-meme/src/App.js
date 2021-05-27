import React, { Component } from "react"
import "./App.css"
import axios from "axios"



class App extends Component {
  constructor() {
    super()
    this.state = {

    }
    //bind methods here
  }


  handleAxiosOrFetchAPICall() {

  }


  render() {

    return (
      <div>
        <RandomMeme />
        <MemeForm />
        <MemePreview />
        <MemeList />
      </div >
    )
  }
}


export default App
