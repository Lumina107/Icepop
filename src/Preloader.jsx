import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Preload from "./assets/preloader.mp4";

export default function Preloader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <section className={`${loading ? "preloader" : "hidden"}`}>
      {/* <ReactPlayer
        url={Preload}
        controls={false}
        playing={true}
        muted={true}
        loop={true}
        onReady={() => {
          playing: true;
        }}
      /> */}

      <video autoPlay={"autoplay"} playsInline muted height={640} width={320}>
        <source src={Preload} type="video/mp4" />
      </video>
    </section>
  );
}
