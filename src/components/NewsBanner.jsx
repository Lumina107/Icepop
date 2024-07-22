import React from "react";
import Banner from "./../assets/banner.mp4";
import ReactPlayer from "react-player";
import Ban from "./../assets/images/banner.png";

export default function NewsBanner() {
  return (
    <section className="-mt-10 relative z-10">
      <img
        src={Ban}
        alt="Banner"
        className="h-auto w-screen object-contain object-left-top"
      />

      <ReactPlayer
        url={Banner}
        controls={false}
        playing={true}
        muted={true}
        loop={true}
        onReady={() => {
          playing: true;
        }}
        height={"auto"}
        width={"auto"}
        style={{
          position: "absolute",
          height: "auto",
          width: "100vw",
          top: "0px",
        }}
      />
    </section>
  );
}
