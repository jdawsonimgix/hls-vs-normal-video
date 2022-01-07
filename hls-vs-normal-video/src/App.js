import React, { useState } from 'react';
import './App.css';
import ReactHlsPlayer from 'react-hls-player';


function App() {
  //const [urlOne, handleOnChange] = useState('https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8');
  const [urlHLS, setName] = useState("");
  const [urlOther, setNameOther] = useState("");
  //const [torf, trueOrFalseButton] = useState("false");
  const playerRef = React.useRef();

  function playVideo() {
    playerRef.current.play();
  }

  return (
    <div className="App">
      <header className="App-header">
 
      <form>
      <label>Enter an HLS url:
        <input
          type="text" 
          value={urlHLS}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
    <form>
      <label>Enter a non-HLS url:
        <input
          type="text" 
          value={urlOther}
          onChange={(e) => setNameOther(e.target.value)}
        />
      </label>
    </form>

    <p>{urlHLS}</p>

    {urlHLS.length > 0 && 
      <ReactHlsPlayer
        playerRef={playerRef}
        src={urlHLS}
        autoPlay={false}
        controls={true}
        width="40%"
        height="auto"
     /> }

    <p>{urlOther}</p>

    {urlOther.length > 0 && 
      <ReactHlsPlayer
        src={urlOther}
        autoPlay={false}
        controls={true}
        width="40%"
        height="auto"
    /> }



    </header>
    <button onClick={() => playVideo()}>True or False</button>

    </div>
  );
}

export default App;


/*
Example url:   https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8
package:  https://www.npmjs.com/package/react-hls-player


Example urls:
https://jdawson.imgix.video/mixkit-stars-in-space-1610.mp4?fm=hls
*/


