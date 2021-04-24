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

    const [image, setImage] = React.useState(avatar);

    const renderImageSecurity = (avatar: string) => {
        const img = new Image;
        img.src = `${avatar}`;
        img.onload = function(){
            (img.width && img.height === 0) && setImage('https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg')
        }
        img.onerror = function(){
            setImage('https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg')
        }
    }

    renderImageSecurity(avatar);

    return (
      <div className="User" onClick={(e) => {onClick && onClick(e, name)}}>
          <div className="User__avatar">
              <img className="User__img" src={image} alt="User avatar"/>
          </div>
          <div className="User__info">
              <p className="User__name">{name}</p>
              <p className="User__nick">{nick}</p>
          </div>
      </div>
    );
}

export default User;