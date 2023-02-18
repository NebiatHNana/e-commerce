import React, { Component } from "react";
import video from "./public/assets/on-code.mp4;";
class Video extends Component {
  render() {
    return (
      <div>
        <video src={video} />
      </div>
    );
  }
}

export default Video;