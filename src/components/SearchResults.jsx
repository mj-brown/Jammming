/* eslint-disable react/prop-types */
import Tracklist from "./Tracklist";

const SearchResults = (props) => {
    return (
        <div className="searchResults">
            <h2>Results</h2>
            <Tracklist 
                tracks={props.searchResults}
                onAdd={props.onAdd} 
            />
        </div>
    );
};

export default SearchResults;