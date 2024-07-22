import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Preload from "./assets/preloader.mp4";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      window.scrollTo(0, 0);
      const preloader = document.querySelector(".preloader");
      setTimeout(() => {
        preloader.remove();
        setLoading(false);
      }, 2000);
    };
  });
  return (
    <section className={`${loading ? "preloader" : "hidden"}`}>
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
