import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


/*
  state = {
    users: [
        {
            'id':1,
            'username': 'Nick',
            'email': 'mejl1'
        },
        {
            'id':2,
            'username': 'matt',
            'email': 'mejl2',
        },
        {
            'id':3,
            'username': 'Just to check',
            'email': 'mejl3',
        },

    ]
}
*/



/*
 getUsers = async (event) =>{
        event.preventDefault(); //prevent default behaviout of app component when the button is pressed
        const apiCall = await fetch (`http://localhost:8000/api/v1/list/users/`);
        const userData = await apiCall.json();
        console.log(userData)
         }

*/
state = {
  users: [],
  loading: true
};

componentDidMount() {
  fetch(`http://localhost:8000/api/v1/list/users/`)
    .then(result => result.json()) // It resolves the promise with a JSON object
    .then(res1 => {
      console.log(res1) // make sure that matches is `res` directly or a neste object within `res` object
      this.setState({
        users: res1,
        loading: false
      })
    })
}



  render() {
    return (
      <div className="App">




        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


           {this.state.users.map((x,indeks) =>
                <div key={x.id} className="todo-item">
                    <div className="todo-item-left">
                        <input type="checkbox"/>
                        <div className="todo-item-label">{x.username}</div>
                    </div>
                    <div className="remove-item">
                        &times;
                    </div>
                </div>
            )}





    <form onSubmit ={this.getUsers}>
                <p>
                	<button>Get users</button>
                </p>
    </form>

aa
      </div>
    );
  }







}

export default App;
