import React from 'react';
import './User.css';

function User(props: any) {
    function clickHandler(event: any) {
        event.preventDefault();
        props.setInputValue(props.name);
        props.setWillClear(true);
    }

    return (
      <div className="User" onClick={(e) => clickHandler(e)}>
          <div className="User__avatar">
              <img src={props.avatar} alt="User avatar"/>
          </div>
          <div className="User__info">
              <p className="User__name">{props.name}</p>
              <p className="User__nick">{props.nick}</p>
          </div>
      </div>
    );
}

export default User;