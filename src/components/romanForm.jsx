import React from "react";
import CustomSwitch from "./customSwitch";
import {int2roman, roman2int} from '../resources/roman'
import Card from '@mui/material/Card';
import '../App.css'
import logo from '../assets/hamsterromano.png'

class RomanForm extends React.Component {

    entradaStorage = localStorage.getItem('entrada');
    checkedStorage = localStorage.getItem('checked');
    resultadoStorage = localStorage.getItem('resultado');

    constructor() {
        super()

        this.state = {
            entrada: this.entradaStorage ?? '',
            checked: this.checkedStorage ?? false,
            resultado: this.resultadoStorage ?? ''
        };

        this.setCheckedValue = this.setCheckedValue.bind(this)
    }

    setCheckedValue = (checked) => {
        this.setState({checked});
        localStorage.setItem('checked', checked)
        this.reset();
    }

    reset = () => {
        this.setState({
            entrada: '',
            resultado: ''
        })
        localStorage.setItem('entrada', '')
        localStorage.setItem('resultado', '')
    }

    converter = (valor) => {

        if (valor === '') {
            this.reset();
            return;
        }

        let conversao;

        if (!this.state.checked) {
            conversao = int2roman(valor);
        }
        else {
            conversao = roman2int(valor);
        }

        this.setState({resultado: conversao});
        localStorage.setItem('entrada', valor)
        localStorage.setItem('resultado', conversao)
    }

    handleInput = (event) => {
        if (this.state.checked) {
            if(event.target.value.match("^[a-zA-Z]*$")){
                if (event.target.value.toUpperCase().match("^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$")) {
                    this.changeValue(event.target.value);
                }
            }
        } else if (!event.target.value.match("^[^0-9]*$")) {
            this.changeValue(event.target.value);
        } else {
            this.changeValue('');
        }
    }

    changeValue(value) {
        this.setState({entrada: value});
        this.converter(value);
    }

    render() {

        let entrada, resultado;

        if (this.state.checked) {
            entrada = <div><input 
            className="appearance-none w-full bg-transparent text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text" onChange={this.handleInput} value={this.state.entrada}/>
            <p className="text-red-500 text-xs italic">Digite o valor desejado</p></div>

            resultado = <div><input 
            className="appearance-none w-full bg-transparent text-black border border-blue-500 rounded py-3 px-4 mb-7 leading-tight focus:outline-none"
            type="text" readOnly={true} value={this.state.resultado}/></div>
        } else {
            entrada = <div><input 
            className="appearance-none w-full bg-transparent text-black border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text" onChange={this.handleInput} value={this.state.entrada}/>
            <p className="text-blue-500 text-xs italic">Digite o valor desejado</p></div>

            resultado = <div><input 
            className="appearance-none w-full bg-transparent text-black border border-red-500 rounded py-3 px-4 mb-7 leading-tight focus:outline-none"
            type="text" readOnly={true} value={this.state.resultado}/></div>
        }

        return (
            <div className="w-full max-w-lg">
                <div style={{display: "flex", margin: "0.5em 0.5em 0.5em 0.5em"}}>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1  style={{alignSelf: "end", fontFamily: "medievalSharp", fontWeight: "700", fontSize: "20pt"}}>Convertendo Números</h1>
                </div>
                <Card sx={{ minWidth: 275, padding: 2, boxShadow: "10px 10px 32px -6px rgba(0,0,0,0.5)", backgroundColor: "rgb(246, 241, 233)" }}>
    
                <table>
                    <tbody>
                        <tr style={{width:"100%", verticalAlign:"middle"}}>
                            <td style={{width:"10%"}}>
                                <CustomSwitch checked={this.state.checked} setCheckedValue={this.setCheckedValue}></CustomSwitch>
                            </td>
                            <td style={{width:"50%"}}>
                                <div className="flex flex-wrap">
                                    <div className="w-full px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-500 text-sm font-bold mb-2"
                                                htmlFor="grid-first-name">
                                                {this.state.checked ? 'Romano' : 'Número'} 
                                        </label>
                                        {entrada}
                                    </div>
                                </div>
                            </td>
                            <td  style={{width:"5%"}}>
                                <label className="block uppercase tracking-wide text-gray-500 text-lg font-bold mb-2"
                                    htmlFor="grid-last-name">
                                    =
                                </label>
                            </td>
                            <td  style={{width:"35%"}}>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-500 text-sm font-bold mb-2"
                                                        htmlFor="grid-first-name">
                                                        {this.state.checked ? 'Número' : 'Romano'} 
                                                </label>
                                                {resultado}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

    </Card>
    
    </div>

        )
    }
}

export default RomanForm;