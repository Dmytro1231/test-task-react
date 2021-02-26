import React from 'react'


function FilteredUsers(props) {
    return (
        <div>
            <input type="text" onChange={props.handleInput}/>
            <input type="text" onChange={props.handleInput}/>
        </div>
    )
}

export default FilteredUsers;

