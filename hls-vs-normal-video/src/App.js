import React, { useState } from 'react';
import './App.css';
import ReactHlsPlayer from 'react-hls-player';
import ReactPlayer from 'react-player'



function App() {
  const [urlHLS, setHLS] = useState(""); //First url that is an HLS file
  const [urlOther, setOtherUrl] = useState(""); //Second url that is a non HLS file
  const playerRef = React.useRef(); //Gets a ref of the HLS video and plays it.
  const [mp4PlayValue, setMp4PlayValue] = useState({playing: false})

  console.log(mp4PlayValue.playing)

  function playVideo() {
    playerRef.current.play();  
  }

 

  return (
    <div className="App">
      <header className="App-header">

      <form>
      <label>Enter HLS url:
        <input
          type="text" 
          value={urlHLS}
          onChange={(e) => setHLS(e.target.value)}
        />
      </label>
    </form>
    <form>
      <label>Enter mp4 url:
        <input
          type="text" 
          value={urlOther}
          onChange={(e) => setOtherUrl(e.target.value)}
        />
      </label>
    </form>

  
    {urlHLS.length > 0 && 
      <ReactHlsPlayer
        playerRef={playerRef}
        src={urlHLS}
        autoPlay={false}
        controls={true}
        width="40%"
        height="40%"
     /> }

  <ReactPlayer 
      url={urlOther} 
      width='40%'
      height='40%'
      controls={true}
      playing={mp4PlayValue.playing}
    />



    </header>
    <button onClick={() => playVideo() }>Play HLS</button>
    <button onClick={() => setMp4PlayValue({playing: true}) }>Play MP4</button>


    </div>
  );
}

export default App;


/*
HLS urls:   https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8
npm:  https://www.npmjs.com/package/react-hls-player


MP4 urls:  http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4
More urls:  https://gist.github.com/jsturgis/3b19447b304616f18657
npm:  https://www.npmjs.com/package/react-player#supported-media

Example urls:
https://jdawson.imgix.video/mixkit-stars-in-space-1610.mp4?fm=hls


Resource to add play functionality to mp4 video:  https://www.youtube.com/watch?v=Y-OLcnr8eNo


*/


