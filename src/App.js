import React from 'react';
import Header from './components/Header'
import Image from './components/Image'
import logo from './image/images.jfif'

class App extends React.Component{
  helpText = "Help text!"
  render(){
    return( <div className="name">
      <Header title="Шапка сайта"/>
      <h1>{this.helpText}</h1>
      <input placeholder={this.helpText} 
             onClick={this.inputClick}
             onMouseEnter={this.mouseOver}
            >
      </input>
    <p>{this.helpText === "Help text!" ? "Yes": "No"}</p>
    <Image image={logo}></Image>
  </div>)
  }

  inputClick(){console.log("Clicked")}
  
  mouseOver(){console.log("Clicked")}
}

export default App