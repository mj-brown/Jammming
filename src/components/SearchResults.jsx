import React from "react";
import Tracklist from "./Tracklist";

const SearchResults = (props) => {
    return (
        <div className="searchResults">
            <h2>Results</h2>
            <Tracklist 
                tracks={props.SearchResults}
                onAdd={props.onAdd} 
            />
        </div>
    );
};

export default SearchResults;