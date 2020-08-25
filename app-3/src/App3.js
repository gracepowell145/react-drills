import React, {Component} from "react"

class App3 extends Component {
    constructor(){
    super();
  
    this.state={
    sibs:['Hunter', 'Avery', 'Evan','Grace', 'Riley', 'Saqqara', 'Chase'],
    userInput: '',
    filteredSibs: []
   }
}

handleChange(val) {
    this.setState({ userInput: val });
  }

  filterSibs(userInput){
      let sibs=this.state.sibs;
      let filteredSibs=[];

      for (let i=0; i<sibs.length; i++){
          if(sibs[i].includes(userInput)) {
              filteredSibs.push(sibs[i]);
          }
        }
        this.setState({ filteredSibs: filteredSibs});
  }


render() {
return(
    <div className="App3 Filter">

        <h1>Filter Siblings</h1>
        <span className="puzzleText">Sibs: { JSON.stringify(this.state.sibs, null, 10) }</span>
      <input className="inputLine" onChange={ (e)=> {this.handleChange(e.target.value)}}/> 
      <button className="confirmationButton" onClick={()=> {this.filterSibs(this.state.userInput)   }}> Filter </button>
      <span className="resultsBox filterSibs"> Filtered Sibs:{ JSON.stringify(this.state.filteredSibs, null, 10) }</span>
    </div>
)
}
}

export default App3;

