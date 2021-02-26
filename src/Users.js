import React from "react";
import PropTypes from "prop-types";

import "./User.css";

function User({ name, lastname, age, sex }) {
  return (
    <div className="user">
      <div className="user__column">
        {/* <h3 className="user__title">{name}</h3>
        <h5 className="user__year">{lastname}</h5>
        <p>{age}</p>
        <p>{sex}</p> */}
        <ul>
          <li>Name: {name}</li>
          <li>Lastname: {lastname}</li>
          <li>Age: {age}</li>
          <li>Sex: {sex}</li>
        </ul>
        {/* <ul className="user__genres">
          {genres.map((genre, idx) => {
           return <li key={idx} className="genres__genre">{genre}</li>;
          })}
        </ul> */
        }
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