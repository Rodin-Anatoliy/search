import React from 'react';
import './Results.css';
import User from '../user/User';

function Results(props: any) {
    
    if (props.isLoad) {

        const userId = props.users.map((user: any) => {
            return user.id
        });

        const userPhoto: any = [];
        for (let i=0; i < props.photo.length; i++) {
            if (userId.includes(props.photo[i].id)) {
                userPhoto.push(props.photo[i]);

            }
            if (userPhoto.length === userId.length) {
                break
            }
        }

        props.users.forEach((user: any) => {
            userPhoto.forEach((photo: any) => {
                if (user.id === photo.id) {
                    user.photo = photo
                }
            })
        });

    }

    function matches(where: any, what: any) {
        let result = false;
        for (let i=0; i < where.length; i++) {
            if (where[i].toLowerCase().includes(what.toLowerCase())) {
                result = true;
                break
            } 
        }
        return result
    }

    const usersList = props.isLoad && props.users.map((user: any) => {
        if (matches([user.username, user.name], props.inputValue)) {
            return <User setWillClear={props.setWillClear} inputValue={props.inputValue} setInputValue={props.setInputValue} name={user.name} nick={'@' + user.username} avatar={user.photo.thumbnailUrl} key={user.id}/>
        } else {return null}
    });

    const error = `${props.error}`;
    
    return (
      <div className={props.isSent ? "Results Results__preloader" : "Results"}>
          {props.isLoad && !props.willClear && !props.error && usersList}
          {!!props.error && (<p className="Results__error">{error}</p>)}
      </div>
    );
}

export default Results;