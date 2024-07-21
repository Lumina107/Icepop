import React from "react";

export default function IcePop() {
  return (
    <section
      id="about"
      className="px-6 md:px-14 lg:px-24 py-20 flex items-center justify-center bg-[#73EFDF]"
    >
      <div className="w-full block h-[550px] container rounded-2xl">
        <iframe
          src="https://drive.google.com/file/d/1D-w4j8LXjLMcB39V7abNMK1zemu5Hmlh/preview"
          className="w-full h-full"
          allow="autoplay"
          allowFullScreen={true}
        ></iframe>
      </div>
    </section>
  );
}
