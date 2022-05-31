import "./App.css";
import { Button } from "semantic-ui-react";
import React from "react";
import MusicForm from "./MusicForm";
import Songs from "./Songs";

class App extends React.Component {
  state = {
    show: false,
    songs: [
      { id: 1, name: "song1", artist: "billy" },
      { id: 2, name: "song2", artist: "bob" },
      { id: 3, name: "song3", artist: "joe" },
    ],
  };

  addSong = (songInfo) => {
    let newSong = { ...songInfo, id: Math.random() };
    let newSongs = [newSong, ...this.state.songs];
    console.log(this.state.songs);
    this.setState({
      songs: newSongs,
    });
  };

  deleteSong = (id) => {
    let newSongs = this.state.songs.filter((c) => c.id !== id);
    console.log(id);
    this.setState({
      songs: newSongs,
    });
  };
  render() {
    const { show } = this.state;
    return (
      <div>
        <h1>Songs</h1>;
        <MusicForm addSong={this.addSong} />;
        <Songs songs={this.state.songs} deleteSong={this.deleteSong} />;
      </div>
    );
  }
}

export default App;
