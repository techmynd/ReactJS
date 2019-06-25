import React, { useState } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./newSongForm";

const SongsList = () => {
  const [songs, setSongs] = useState([
    { title: "song one", id: 1 },
    { title: "song two", id: 2 },
    { title: "song three", id: 3 },
  ]);
  // const addSong = () => {
  //   setSongs([...songs, { title: "new song", id: uuid() }]);
  // };
  const addSong = title => {
    setSongs([...songs, { title: title, id: uuid() }]);
  };
  return (
    <div className='songs-list'>
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      {/* <button onClick={addSong}>Add a Song</button> */}
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongsList;
