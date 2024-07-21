import React from "react";
import Banner from "./../assets/images/icepop_banner.png";

export default function NewsBanner() {
  return (
    <section className="-mt-10 relative z-10">
      <img
        src={Banner}
        alt="Banner"
        className="h-auto w-screen object-contain object-left-top"
      />
    </section>
  );
}
