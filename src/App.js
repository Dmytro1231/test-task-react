import React from "react";
import axios from "axios";
import Users from "./Users";
import FilteredUsers from "./FilteredUsers";

import "./index.css";

class App extends React.Component {
  state = {
    isLoading: true,
    users: [],
    valueName: "",
    valueLastName: "",
    age: "",
    sex: "",
  };

  getUsers = async () => {
    const url = "https://venbest-test.herokuapp.com/";
    const data = await axios.get(url);
    this.setState({ users: data.data, isLoading: false });
  };

  componentDidMount() {
    this.getUsers();
  }

  handleInputName = (e) => {
    this.setState({ valueName: e.target.value });
  };

  handleInputSurname = (e) => {
    this.setState({ valueLastName: e.target.value });
  };

  handleInputAge = (e) => {
    this.setState({ age: e.target.value });
  };

  handleInputMale = (e) => {
    this.setState({ sex: e.target.value });
  };

  render() {
    const { isLoading, users } = this.state;

    let filteredUsers = users.filter((user) => {
      if (this.state.valueName !== "") {
        return user.name
          .toLowerCase()
          .includes(this.state.valueName.toLowerCase());
      } else if (this.state.valueLastName !== "") {
        return user.lastname
          .toLowerCase()
          .includes(this.state.valueLastName.toLowerCase());
      } else if (this.state.age !== "") {
        return user.age
          .toString()
          .toLowerCase()
          .includes(this.state.age);
      } else if (this.state.sex === "m" || this.state.sex === "f") {
        return user.sex.includes(this.state.sex);
      }
      return this.state.users;
    });

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">"Загрузка..."</span>
          </div>
        ) : (
          <div>
            <FilteredUsers
              handleInputName={this.handleInputName}
              handleInputSurname={this.handleInputSurname}
              handleInputAge={this.handleInputAge}
              handleInputMale={this.handleInputMale}
            />
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
    );
  }
}

export default App;
