import React, {Component} from "react";
import './App.css'

class App2 extends Component {
    constructor(){
        super();

        this.state={
            name: ['Hunter', 'Avery','Evan',"Grace","Riley","Saqqara",'Chase']
        }

    }
    render() {
        let ourNames= this.state.name.map((element, index)=> {
            return <h1 key={index}>{element}</h1>
        })

    return(
        <div className="Siblings"> 
        <h1></h1>
            <h3>{ourNames}</h3>
        </div>
        
    )
}
}

export default App2;