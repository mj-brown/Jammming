import React, {useState, useCallback} from 'react';

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const handleTermChange = useCallback(
        (event) => {
            setTerm(event.target.value);
        }, []); 
    
    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);
    
    return (
        <div className='searchBar'>
            <input placeholder='Enter Song Title' onChange={handleTermChange} />
            <button className='searchButton' onClick={search}>Search</button>
        </div>
    );
};

export default SearchBar;