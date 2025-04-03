import React from "react";
import Tracklist from "../TrackList/TrackList";

interface PlaylistProps {
  playlistTracks: any[];
  setPlaylistTracks: React.Dispatch<React.SetStateAction<any[]>>;
}

const Playlist: React.FC<PlaylistProps> = ({ playlistTracks, setPlaylistTracks }) => {
  return (
    <div>
      <h2>Your Playlist</h2>
      <Tracklist tracks={playlistTracks} isPlaylist={true} setPlaylistTracks={setPlaylistTracks} />
    </div>
  );
};

export default Playlist;

