import React, {FC} from 'react';
import './Bar.css';
import lens from '../../images/search.svg';

interface BarProps {
    setIsSent?: (value: boolean) => void;
    setIsLoad?: (value: boolean) => void;
    setWillClear?: (value: boolean) => void;
    setInputValue?: (value: string) => void;
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
        setIsSent && setIsSent(true);
        setIsLoad && setIsLoad(false);
        setWillClear && setWillClear(false);
    }

    const inputHandler = (event: React.FormEvent<HTMLInputElement>) => {
        let value = event.currentTarget.value;
        setIsSent && setIsSent(true);
        setIsLoad && setIsLoad(false);
        setWillClear && setWillClear(false);
        setInputValue && setInputValue(value);
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
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