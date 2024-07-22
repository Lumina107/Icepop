import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import Preload from "./assets/preloader.mp4";

export default function Preloader() {
  useEffect(() => {
    window.onload = () => {
      window.scrollTo(0, 0);
      const preloader = document.querySelector(".preloader");
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    };
  });
  return (
    <section className="preloader">
      <ReactPlayer
        url={Preload}
        controls={false}
        playing={true}
        muted={true}
        loop={true}
        onReady={() => {
          playing: true;
        }}
      />
    </section>
  );
}
