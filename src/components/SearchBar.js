import './SearchBar.css';
import React, {useState} from 'react';


export const SearchBar = ({onSubmit}) => {

    //input value state
    const[inputValue, setInputValue]=useState('');
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputValue);
    }

    const onChangeHandler = (event) => {
      setInputValue(event.currentTarget.value);
    }




    return (
        <div className={'search-bar'}>
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input
                    value={inputValue}
                    onChange={onChangeHandler}
                />
            </form>

        </div>
    );
};
