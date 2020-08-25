import React, {Component} from "react";

class Todo extends Component{
    render(){
        return (
        <div> 
        <p>{this.props.task}</p>
        </div>
        )
    }
}
export default Todo;

//task is the name of my prop. So i will need to set.state inside of my App.js