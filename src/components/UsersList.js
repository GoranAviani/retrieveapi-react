import React , {Component} from "react";



class UsersList extends Component{

state = {
  users: [],
  loading: true
};

componentDidMount() {
 fetch(`http://localhost:8000/api/v1/list/users/`)
  //fetch(`https://www.amibit.org/api/v1/list/users/`)

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
       {this.state.users.map((x,indeks) =>
            <div key={x.id} className="todo-item">
                <div className="todo-item-left">
                    {/*console.log(x.id)*/}
                    <input type="checkbox"/>
                    <div className="todo-item-label">{x.username}</div>
                </div>
                <div className="remove-item">
                    &times;
                </div>
            </div>
        )}


     </div>
    );
  }








}



export default UsersList;