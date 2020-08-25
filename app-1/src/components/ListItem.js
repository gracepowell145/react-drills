import React from "react"


class MyForm extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello</h1>
          <p>Enter your name:</p>
          <input
            type="text"
          />
        </div>
      );
    }
  }

  export default MyForm;
  // ReactDOM.render(<MyForm />, document.getElementById('root'));
