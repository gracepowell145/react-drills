//Create an app similiar to question #6, except this time add a new third component called `NewTask`. `NewTask` should be responsible for adding a new task to a `task array` on the `App` component. Also add a new fourth component called `List`. `List` should be responsible for display the tasks inside of a `task array` on the `App` component in a list-like fashion.

import React, {Component} from "react";
import Todo from "./Todo"

class List extends Component{
    render(){
        let list = this.props.tasks.map((element, index) => { return <Todo key = {index} task={element}/>
    });
    return <div>{list}</div>
    }
}

export default List;