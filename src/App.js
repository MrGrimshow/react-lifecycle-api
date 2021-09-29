import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  async getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ users: users });
      });
  }
  componentDidMount() {
    this.getUsers();
  }
  render() {
    return   <>
    {this.state.users.map((user) => {
      return <h1 key={user.id}>{user.name}<br/>{user.username}<br/>{user.email}<br/><br/></h1>;
    })}
  </>
  }
}

export default App;
