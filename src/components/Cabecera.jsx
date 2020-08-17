import React,{Component} from 'react'
import H1 from './H1'
import logo from '../logo.svg';

const styles ={
    header:({backgroundColor}) => ({
        backgroundColor,
        heigth:'150px',
        padding: '20px',
        color:'white',
    })
}

export default class Cabecera extends Component{

    state = {
        backgroundColor: '#222'
    }

    manejaClick =() =>{
        const {manejaClick, miau, guau} = this.props
        manejaClick(miau,guau)
    }
    cambiarColorHeader =()=> {
        this.setState({backgroundColor:'#f00'})
    }

    render(){
        const{ miau,manejaClick,guau} = this.props
        const {backgroundColor} = this.state

        return(
            <header onClick={this.cambiarColorHeader} style={styles.header({backgroundColor})}>
            <img src={logo} className="App-logo" alt="logo" />
            <H1>{miau}</H1>
          </header>  
        )
    }
}