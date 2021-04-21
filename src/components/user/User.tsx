import React, {FC} from 'react';
import './User.css';

interface UserProps {
    name: string;
    nick: string;
    avatar: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string) => void;
}
const User: FC<UserProps> = 
    ({
        name,
        nick,
        avatar,
        onClick
    }) => {

    return (
      <div className="User" onClick={(e) => {onClick && onClick(e, name)}}>
          <div className="User__avatar">
              <img src={avatar} alt="User avatar"/>
          </div>
          <div className="User__info">
              <p className="User__name">{name}</p>
              <p className="User__nick">{nick}</p>
          </div>
      </div>
    );
}

export default User;