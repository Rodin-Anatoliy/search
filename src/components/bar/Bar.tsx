import React, {FC} from 'react';
import './Bar.css';
import lens from '../../images/search.svg';

interface BarProps {
    setIsSent?: any;
    setIsLoad?: any;
    setWillClear?: any;
    setInputValue?: any;
    inputValue?: string;
}

const Bar: FC<BarProps> =
    ({
        setIsSent,
        setIsLoad,
        setWillClear,
        setInputValue,
        inputValue
    }) => {

    const focusHandler = () => {
        setIsSent(true);
        setIsLoad(false);
        setWillClear(false);
    }

    const inputHandler = (event: any) => {
        let value = event.currentTarget.value;
        setIsSent(true);
        setIsLoad(false);
        setWillClear(false);
        setInputValue(value);
    }

    const submitHandler = (event: any) => {
        event.preventDefault();
    }

    return (
        <form className="Bar" onSubmit={(e) => submitHandler(e)}>
            <button type="submit" className="Bar__submit">
                <img className="Bar__icon" src={lens} alt="search icon"/>
            </button>
            
            <input 
                value={inputValue}
                autoComplete="off"
                onFocus={() => {focusHandler()}}
                onInput={(e) => {inputHandler(e)}}
                name="text"
                type="text"
                className="Bar__input"
                placeholder="Search"
            />
        </form>
    );
}

export default Bar;