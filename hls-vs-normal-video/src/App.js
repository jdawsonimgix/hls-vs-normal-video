import React from 'react';
import './App.css';
import ReactHlsPlayer from 'react-hls-player';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ReactHlsPlayer
      src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
      autoPlay={false}
      controls={true}
      width="40%"
      height="auto"
  />


      </header>
    </div>
  );
}

export default App;
