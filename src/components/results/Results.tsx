import React, {FC} from 'react';
import './Results.css';
import User from '../user/User';
import {IUser} from '../../types/types'

interface ResultsProps {
    errorMessage?: any;
    inputValue?: string;
    setInputValue?: any;
    willClear?: boolean;
    setWillClear?: any;
    users?: any;
    photo?: any;
    isSent?: boolean;
    isLoad?: boolean;
    //User?: React.ReactChild | React.ReactNode;
}

const Results : FC<ResultsProps> = 
    ({
        errorMessage,
        inputValue,
        setInputValue,
        willClear,
        setWillClear,
        users, photo,
        isSent,
        isLoad
    }) => {
    
    if (isLoad) {

        const userId = users.map((user: any) => {
            return user.id
        });

        const userPhoto: any = [];
        for (let i=0; i < photo.length; i++) {
            if (userId.includes(photo[i].id)) {
                userPhoto.push(photo[i]);

            }
            if (userPhoto.length === userId.length) {
                break
            }
        }

        users.forEach((user: any) => {
            userPhoto.forEach((photo: any) => {
                if (user.id === photo.id) {
                    user.photo = photo
                }
            })
        });

    }

    const matches = (where: any, what: any) => {
        let result = false;
        for (let i=0; i < where.length; i++) {
            if (where[i].toLowerCase().includes(what.toLowerCase())) {
                result = true;
                break
            } 
        }
        return result
    }

    const userClickHandler = (event: any, name: string) => {
        event.preventDefault();
        setInputValue(name);
        setWillClear(true);
    }

    const usersList = isLoad && users.map((user: any) => {
        if (matches([user.username, user.name], inputValue)) {
            return <User
                onClick={userClickHandler}
                name={user.name}
                nick={'@' + user.username}
                avatar={user.photo.thumbnailUrl}
                key={user.id}
            />
        } else {return null}
    });



    const errorMessageText = `${errorMessage}`;
    
    return (
      <div className={isSent ? "Results Results__preloader" : "Results"}>
          {isLoad && !willClear && !errorMessage && usersList}
          {!!errorMessage && (<p className="Results__error">{errorMessageText}</p>)}
      </div>
    );
}

export default Results;