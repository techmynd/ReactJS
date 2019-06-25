import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    //console.log(title);
    addSong(title);
    // clear field
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name</label>
      <input
        type='text'
        value={title}
        required
        onChange={e => setTitle(e.target.value)}
      />
      <button type='submit'>Add Song</button>
    </form>
  );
};

export default NewSongForm;
