import React from 'react';
import YouTube from 'react-youtube';

class Youtubevideo extends React.Component {
  render() {
    const opts = {
      height: '80%',
      width: '50%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="TG5F4rt2Ol4"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  //_onReady(event) {
    // access to player in all event handlers via event.target
    //event.target.startVideo();
  //}
}
export default Youtubevideo;
