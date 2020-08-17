import React, { Component } from 'react';
import Cabecera from './components/Cabecera'
import P from './components/P'
import './App.css';

class App extends Component {
  
state ={
  miau:'Bienvenidos miaujeje'
}

  manejaClick = texto =>{
  console.log(texto)
  }
  cambiarTextoDelEstado = () =>{
   this.setState({miau:'El nuevo valor que tenga'})
  }
  render(){
    const {miau} = this.state
   
    return (
      <div className="App">
       <Cabecera miau={miau} manejaClick={this.manejaClick}/>
            
        <div>
          <P onClick={this.cambiarTextoDelEstado}>
            {miau}
          </P>
        </div>
      </div>
    );
  }
  
}

export default App;
