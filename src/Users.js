import React from "react";
import PropTypes from "prop-types";

import "./User.css";

function User({ name, lastname, age, sex }) {
  return (
    <div className="user">
      <div className="user__column">
        <ul>
          <li>Name: {name}</li>
          <li>Lastname: {lastname}</li>
          <li>Age: {age}</li>
          <li>Sex: {sex}</li>
        </ul>
      </div>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
};

export default User;
