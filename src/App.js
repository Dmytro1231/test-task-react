import React from 'react'
import axios from "axios";
import Users from "./Users";
import FilteredUsers from './FilteredUsers'

class App extends React.Component {
  state = {
    isLoading: true,
    users: [],
    valueName: '',
    valueLastName: '',
  };

  getUsers = async () => {
    const data = await axios.get(
      "https://venbest-test.herokuapp.com/"
    );
    this.setState({ users: data.data, isLoading: false });
  };

  componentDidMount() {
   this.getUsers()
  }

  handleInput = (e) => {
    this.setState({ valueName: e.target.value })
  }

  render() {
    const { isLoading } = this.state;
    let filteredUsers = this.state.users.filter((user) => {
      return user.name.toLowerCase().includes(this.state.valueName.toLowerCase())
    })

    return (
      <section className="container">
        {isLoading
          ? (
          <div className="loader">
            <span className="loader_text">"Загрузка..."</span>
          </div>
    ) : ( 
      <div>
              <FilteredUsers handleInput={this.handleInput} />
              <div className="users">
                {filteredUsers.map((user, index) => (
              <Users
                key={index}
                name={user.name}
                lastname={user.lastname}
                age={user.age}
                sex={user.sex}
              />
           ))}
          </div>
          </div>
    )}
      </section>
    )
}
}

export default App;