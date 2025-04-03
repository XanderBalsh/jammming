import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState([]); // Will hold search results
  const [playlistTracks, setPlaylistTracks] = useState([]); // Will hold the playlist songs

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div>
        <SearchBar setSearchResults={setSearchResults} />
        <SearchResults searchResults={searchResults} />
      </div>
      <Playlist playlistTracks={playlistTracks} setPlaylistTracks={setPlaylistTracks} />
    </div>
  );
};

export default App;
