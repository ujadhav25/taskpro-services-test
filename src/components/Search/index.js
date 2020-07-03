import React, { useState } from 'react';
import './style.css';

const Search = React.memo(props => {
    const [name, setName] = useState('');

    const onNameChangeHandler = (e) => {
        setName(e.target.value);
        props.searchByName(e.target.value);
    }

    return (
        <div className="search-container">
            <input type="text" value={name} onChange={(e) => onNameChangeHandler(e)} />
            <button
                className="clear-btn"
                onClick={() => { setName(''); props.searchByName('') }}
                disabled={!name}
            >clear
            </button>
        </div>
    )
});

export default Search;