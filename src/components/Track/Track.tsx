import React from "react";

interface TrackProps {
  track: any;
  isPlaylist: boolean;
  setPlaylistTracks?: React.Dispatch<React.SetStateAction<any[]>>;
}

const Track: React.FC<TrackProps> = ({ track, isPlaylist, setPlaylistTracks }) => {
  const handleAdd = () => {
    if (setPlaylistTracks) {
      setPlaylistTracks((prev) => [...prev, track]);
    }
  };

  const handleRemove = () => {
    if (setPlaylistTracks) {
      setPlaylistTracks((prev) => prev.filter((t) => t.id !== track.id));
    }
  };

  return (
    <div>
      <p>{track.name} - {track.artist}</p>
      {!isPlaylist ? (
        <button onClick={handleAdd}>Add</button>
      ) : (
        <button onClick={handleRemove}>Remove</button>
      )}
    </div>
  );
};

export default Track;
