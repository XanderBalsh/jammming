import React from "react";
import Track from "../Track/Track";

interface TracklistProps {
  tracks: any[];
  isPlaylist: boolean;
  setPlaylistTracks?: React.Dispatch<React.SetStateAction<any[]>>;
}

const Tracklist: React.FC<TracklistProps> = ({ tracks, isPlaylist, setPlaylistTracks }) => {
  return (
    <div>
      {tracks.map((track) => (
        <Track key={track.id} track={track} isPlaylist={isPlaylist} setPlaylistTracks={setPlaylistTracks} />
      ))}
    </div>
  );
};

export default Tracklist;

