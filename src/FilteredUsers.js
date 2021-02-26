import React from "react";

function FilteredUsers(props) {
  return (
    <div>
      <label>
        Имя:
        <input type="text" onChange={props.handleInput} />
      </label>

      <label>
        Фамилия:
        <input type="text" onChange={props.handleInput2} />
      </label>

      <label>
        Возраст:
        <input type="text" onChange={props.handleInput3} />
      </label>

      <label>
        Пол:
        <input type="checkbox" value="m" onChange={props.handleInput4} />
        <input type="checkbox" value="f" onChange={props.handleInput5} />
      </label>
    </div>
  );
}

export default FilteredUsers;
