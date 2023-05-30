import logo from './assets/hamsterromano.png'
import './App.css';
import './index.css'
import './tailwind.css'
import RomanForm from "./components/romanForm";
import React from "react";


class App extends React.Component{

    render() {
        return (
            <React.Fragment>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <RomanForm/>
                </header>
            </React.Fragment>
        );
    }
}

export default App;
