import React from 'react';
import Header from './components/Header'
import Image from './components/Image'
import logo from './image/images.jfif'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            helpText: "Help text",
            userData : ""
        }

        this.inputClick = this.inputClick.bind(this)
    }

  render(){
    return( <div className="name">
      <Header title="Шапка сайта"/>
      <h1>{this.state.helpText}</h1>
      <h2>{this.state.userData}</h2>
      <input placeholder={this.state.helpText}
             onChange={event => this.setState({userData: event.target.value})}
             onClick={this.inputClick}
             onMouseEnter={this.mouseOver}
            >
      </input>
    <p>{this.helpText === "Help text!" ? "Yes": "No"}</p>
    <Image image={logo}></Image>
  </div>)
  }

  inputClick(){
    this.setState({helpText: "Change"})
    console.log("Change")
}
  
  mouseOver(){console.log("Clicked")}
}

export default App