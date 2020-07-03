import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        // tells parent component what the search term is
        // props.function vs function
        // call callback function passed into c from p
        onFormSubmit(term);
    };
    return(
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search for a video:</label>
                    <input 
                        type="text" 
                        value={term} 
                        onChange={event => setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;