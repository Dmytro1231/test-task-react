import React from "react";

function FilteredUsers({
  handleInputName,
  handleInputSurname,
  handleInputAge,
  handleInputMale,
}) {
  return (
    <div className="filter">
      <label for="name">
        Имя:
        <input type="text" onChange={handleInputName} />
      </label>

      <label for="surname">
        Фамилия:
        <input type="text" onChange={handleInputSurname} />
      </label>

      <label for="age">
        Возраст:
        <input type="text" onChange={handleInputAge} />
      </label>

      <label className="checkbox">
        Пол:
        <label>
          {" "}
          M &nbsp;
          <input type="checkbox" value="m" onChange={handleInputMale} />
        </label>
        <label>
          {" "}
          F &nbsp;
          <input type="checkbox" value="f" onChange={handleInputMale} />
        </label>
      </label>
    </div>
  );
}

export default FilteredUsers;
