
import './App.css';
import './index.css'
import './tailwind.css'
import RomanForm from "./components/romanForm";
import React from "react";


class App extends React.Component{

    componentDidMount(){
        document.title = "Roman Converter"
      }

    render() {

        
        return (
            <React.Fragment>
                <RomanForm/>
            </React.Fragment>
        );
    }

    
}

export default App;
