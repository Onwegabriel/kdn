// src/components/MovieSearch.js

import React, { useState } from 'react';

const MovieSearch = ({ Movies, onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        onSearch(value); // Call the onSearch prop to filter movies
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for a movie..."
                value={query}
                onChange={handleSearchChange}
                className="search-input"
            />
        </div>
    );
};

export default MovieSearch;
