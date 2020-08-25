
import React, {Component} from "react";

class Login extends Component{
    constructor(){
     super();   // super(props);
    
    this.state ={
        username:"",
        password: ""
    };
this.handleLogin = this.handleLogin.bind(this);
}
    // this.changeUserName = this.changeUsername.bind(this);
    // this.changePassword= this.changePassword.bind(this); 
handleUsernameChange(name){
    this.setState({ username: name});
}
 handlePasswordChange(pass) {
     this.setState({ password: pass});
 }

 handleLogin() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    //  alert('Username: ${this.state.username'} Password: ${this.state.password}');
 }

 render() {
     return(
         <div>
             <p>Username:</p>
         <input onChange={e => this.handleUsernameChange(e.target.value)}
         type="text"/>
         <p>Password:</p>
         <input onChange ={e => this.handlePasswordChange(e.target.value)}
            type="text"/>
            <button onClick={this.handleLogin}>Login</button>
         </div>
     );
    }
 }


// changeUserName(){
    // this.setState({
        // userName:""
    // })
// }

// changePassword(){
    // this.setState({
        // password:""
    // })
// }





export default Login;
// import React, {Component} from "react";
// import axios from "axios";

// export default class Login extends Component {
//     constructor(props) {
// super(props);
// this.state ={
//     email: "",
//     password: "",
//     loginErrors: ""
// };

// this.handleSubmit = this.handleSubmit.bind(this);
// this.handleChange =this.handleChange.bind(this);
//     }
// }

// handleChange(event){
//     this.setState({
//         [event.target.name]: event.target.value
//     });
// }
// handleSubmit(event){
//     const {email, password } = this.state;

//     axios
//     .post(
//     "http://localhost:3001/sessions",
//     {
//         user: { //object with email and password credintials
//             email: email,
//             password: password 
//         }
//     },
//     {withCredintials: true}
// )
// .then(respose => {
//     console.log("res from login", reponse)
// })
