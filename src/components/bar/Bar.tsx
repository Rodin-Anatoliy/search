import React from 'react';
import './Bar.css';
import lens from '../../images/search.svg'

function Bar(props: any) {

    function focusHandler() {
        props.setIsSent(true);
        props.setIsLoad(false);
        props.setWillClear(false);
    }

    function inputHandler(event: any) {
        let value = event.currentTarget.value;
        props.setIsSent(true);
        props.setIsLoad(false);
        props.setWillClear(false);
        props.setInputValue(value);
    }

    function submitHandler(event: any) {
        event.preventDefault();
    }

    return (
        <form className="Bar" onSubmit={(e) => submitHandler(e)}>
            <button type="submit" className="Bar__submit">
                <img className="Bar__icon" src={lens} alt="search icon"/>
            </button>
            
            <input 
                value={props.inputValue}
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