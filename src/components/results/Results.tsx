import React, {FC} from 'react';
import './Results.css';
import User from '../user/User';
import {IUser, IPhoto} from '../../types/types'

interface ResultsProps {
    errorMessage?: string;
    inputValue: string;
    setInputValue?: (value: string) => void;
    willClear?: boolean;
    setWillClear?: (value: boolean) => void;
    users?: any;
    photo?: any;
    isSent?: boolean;
    isLoad?: boolean;
}

const Results : FC<ResultsProps> = 
    ({
        errorMessage,
        inputValue,
        setInputValue,
        willClear,
        setWillClear,
        users,
        photo,
        isSent,
        isLoad
    }) => {
    
    if (isLoad && users) {

        const userId = users.map((user: IUser) => {
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

        users.forEach((user: IUser) => {
            userPhoto.forEach((photo: IPhoto) => {
                if (user.id === photo.id) {
                    user.photo = photo
                }
            })
        });

    }

    const matches = (where: any, what: string) => {
        let result = false;
        for (let i=0; i < where.length; i++) {
            if (where[i].toLowerCase().includes(what.toLowerCase())) {
                result = true;
                break
            } 
        }
        return result
    }

    const userClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string) => {
        event.preventDefault();
        setInputValue && setInputValue(name);
        setWillClear && setWillClear(true);
    }

    const usersList = isLoad && users && users.map((user: any) => {
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