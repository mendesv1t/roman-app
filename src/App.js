
import './App.css';
import './index.css'
import './tailwind.css'
import RomanForm from "./components/romanForm";
import Footer from './components/Footer';
import React from "react";


class App extends React.Component{

    render() {

        return (
            <React.Fragment>
                <div style={{height: "20%"}}></div>
                <div style={{display: "flex", justifyContent: "center", flexDirection: "row", height: "72%"}}>
                    <RomanForm/>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }

    
}

export default App;
