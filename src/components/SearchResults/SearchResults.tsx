import React from "react";
import Tracklist from "../TrackList/TrackList";

interface SearchResultsProps {
  searchResults: any[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <Tracklist tracks={searchResults} isPlaylist={false} />
    </div>
  );
};

export default SearchResults;