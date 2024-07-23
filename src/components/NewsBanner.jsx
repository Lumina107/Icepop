import React from "react";
import Banner from "./../assets/banner.mp4";
import Ban from "./../assets/images/banner.png";

export default function NewsBanner() {
  return (
    <section className="-mt-10 relative z-10">
      <img
        src={Ban}
        alt="Banner"
        className="h-auto w-screen object-contain object-left-top"
      />
      <video
        className="absolute top-0 w-screen h-auto"
        autoPlay={"autoplay"}
        playsInline
        muted
        loop
        height={640}
        width={320}
      >
        <source src={Banner} type="video/mp4" />
      </video>
    </section>
  );
}
