import React from 'react';

const SearchResults = ({ results }) => {
    return (
        <div className="search-results">
            <h1>Search Results</h1>
            {results && results.length > 0 ? (
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>
                            <h2>{result.title}</h2>
                            <p>{result.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;