import React, {useState} from 'react';

export const SearchBar = ({onSubmit}) => {

    //input value state
    const[inputValue, setInputValue]=useState('');
    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    const onChangeHandler = (event) => {
      setInputValue(event.currentTarget.value)
    }


    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    value={inputValue}
                    onChange={onChangeHandler}
                />
            </form>

        </div>
    );
};
