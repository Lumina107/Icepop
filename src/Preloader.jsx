import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Preload from "./assets/preloader.mp4";

export default function Preloader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
   
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
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
