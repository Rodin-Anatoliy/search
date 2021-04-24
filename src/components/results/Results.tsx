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
        isSent,
        isLoad
    }) => {

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
            const photo = typeof user.photo === "string" ? user.photo : 'https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg';
            return <User
                onClick={userClickHandler}
                name={user.name}
                nick={user.username}
                avatar={photo}
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