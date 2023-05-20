import logo from './assets/hamsterromano.png'
import './App.css';
import './index.css'
import './tailwind.css'
import RomanForm from "./components/romanForm";
import React from "react";
import {int2roman, roman2int} from './resources/roman'


class App extends React.Component{

    tipo = 0;
    entrada = 0;
    resultado = '';

    constructor(props) {

        super(props);

        this.state = {

            tipo: this.tipo,
            entrada: this.entrada,
            resultado: this.resultado

        };

    }

    converter = () => {

        let resultado = 5;

        if (this.state.tipo === 0) {
            resultado = int2roman(this.state.entrada);
        }
        else {
            resultado = roman2int(this.state.entrada);
        }
        this.setState({resultado});
    }

    handleInput = (event) => {
        let entrada = event.target.value;
        this.setState({entrada});
    }

    render() {
        return (
            <React.Fragment>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <RomanForm resultado={this.state.resultado} handleInput={this.handleInput} converter={this.converter}/>
                </header>
            </React.Fragment>
        );
    }
}

export default App;
