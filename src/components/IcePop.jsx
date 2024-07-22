import React from "react";
import About from "./../assets/about.mp4";
import Box from "./../assets/images/thebox.png";

export default function IcePop() {
  return (
    <section
      id="about"
      className="px-6 md:px-14 lg:px-24 py-20 flex items-center justify-center bg-[#73EFDF]"
    >
      <div className="w-fit mx-auto block container rounded-2xl">
        <video poster={Box} controls height={640} width={320}>
          <source src={About} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
