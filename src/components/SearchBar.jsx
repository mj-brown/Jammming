/* eslint-disable react/prop-types */
import {useState, useCallback} from 'react';
import '../styles/SearchBar.css'

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    const handleTermChange = useCallback(
        (event) => {
            setTerm(event.target.value);
        }, []); 
    
    const search = useCallback(() => {
        props.onSearch(term);
    }, [props, term]);
    
    return (
        <div className='searchBar'>
            <input placeholder='Enter Song Title' onChange={handleTermChange} className='searchContainer' />
            <button className='searchButton' onClick={search}>Search</button>
        </div>
    );
};

export default SearchBar;