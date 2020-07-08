import React, { Component } from 'react'

export default class Contador extends Component{
    state = {
        numero: this.props.numeroInicial
    }
    
    maisUm = () => {
        this.alterarNumero(+1)
        // this.setState({ numero: this.state.numero + 1 })
        // this.state.numero++
        // this.state.numero = this.state.numero + 1
    }

    menosUm = () => {
        this.alterarNumero(-1)
        // this.setState({ numero: this.state.numero - 1 })
    }
    
    alterarNumero = diferenca => {
        this.setState({ 
            numero: this.state.numero + diferenca 
        })
    }

    render(){
        return(
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alterarNumero(10)}>Inc 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Dec 10</button>
            </div>
        )
    }
}

// SOLUÇÃO 1 - Função bind
// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(props)
// }

// SOLUÇÃO 2 - Função arrow no onClick
{/* <button onClick={() => this.maisUm()}>Inc</button> */}

// SOLUÇÃO 3 - Função arrow
// maisUm = () => {
//     this.props.numero++
// }