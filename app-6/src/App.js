import React, {Component} from 'react';
import './App.css';
import Todo from './Todo.js'

class App extends Component{
constructor(){
  super();

  this.state={
    list:[],
    input:""
  };
  this.handleAddTask = this.handleAddTask.bind(this);
}
handleInputChange(value) {
  this.setState({ input: value });
}
handleAddTask() {
  this.setState({
    list:[...this.state.list, this.state.input],
    input:""
  });
}

render(){
  let list = this.state.list.map((element,index)=> {
    return <Todo key = {index} task={element}/>
  });

  return(
    <div className ="App">
      <h1>To-Do-List:</h1>
    <div>
    <input value={this.state.input}
    placeholder="Enter new task"
    onChange={e => this.handleInputChange(e.target.value)}/>
    <button onClick={this.handleAddTask}>Add:</button>
    </div>

    {list}
    </div>
  );
}
}

export default App;

// }
// }
//     <div className="App">
 
//     </div>
//   );
// }
// }

// export default App;

// The `App` component should be responsible for getting new tasks and storing the list of tasks.