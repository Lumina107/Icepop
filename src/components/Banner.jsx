import React, { useEffect, useState } from "react";
import Icepop from "./../assets/images/icepop.png";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaXTwitter } from "react-icons/fa6";

export default function Banner() {
  const Value = "CA: WEN?";
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, "2000");
    }
  });

  return (
    <section className="min-h-[550px] md:min-h-[500px] lg:min-h-[600px] bg-[#73EFDF] flex items-end justify-center lg:pb-28 pb-20 px-4 md:px-12 lg:px-20">
      <div className="flex flex-col text-center items-center justify-center max-w-5xl gap-5">
        <div data-aos="fade-up">
          <img
            src={Icepop}
            className="h-16 md:h-28 lg:h-36 w-auto"
            alt="Icepop"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className="max-w-4xl">
          <span className="text-base md:text-xl lg:text-2xl text-black content_text line-through">
            $ICEPOP Isn't just a
          </span>
          <span className="text-[#9959BA] purple_text text-base md:text-xl lg:text-2xl mx-2">
            Fucking Purple ICEPOP
          </span>
          <span className="text-base md:text-xl lg:text-2xl text-black content_text line-through">
            it's a figure of culture who represents the Solana Ecosystem, with
            the curate the narrative that Solana summer is here all year round.
            Built by proven builders.
          </span>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-5">
          <CopyToClipboard
            data-aos="fade-up"
            data-aos-delay="300"
            className="relative hover:scale-90"
            text={Value}
            onCopy={() => setCopied(true)}
          >
            <span>
              <div className="h-12 md:h-16 lg:h-20 z-20 rounded-full border-4 border-black flex flex-row items-center justify-center px-12 md:px-20 bg-[#9959BA] relative">
                <p className="text-xs md:text-lg lg:text-[25px] text-white text-stroked">
                  {Value}
                </p>
              </div>
              <div className="absolute h-full w-full top-1 left-0.5 border-4 border-black rounded-full bg-black" />
            </span>
          </CopyToClipboard>
          <a href="https://x.com/icepopcoin?s=11">
            <div data-aos="fade-up" data-aos-delay="200" className="relative">
              <div className="h-12 md:h-16 lg:h-20 z-20 rounded-full border-4 border-black flex flex-row items-center justify-center px-9 bg-[#9959BA] relative">
                <p className="text-xs md:text-lg lg:text-[25px] text-white font-bold">
                  <FaXTwitter />
                </p>
              </div>
              <div className="absolute h-full w-full top-1 left-0.5 border-4 border-black rounded-full bg-black" />
            </div>
          </a>
        </div>
      </div>
      <div
        className={`fixed bottom-5 transition-transform ${
          copied ? "translate-y-0" : "translate-y-[50vh]"
        } z-40 ease-in-out duration-500`}
      >
        <div className="relative">
          <div className="h-12 lg:h-20 z-20 rounded-full border-4 border-black flex flex-row items-center justify-center px-14 bg-[#9959BA] relative">
            <p className="text-xs md:text-lg lg:text-[25px] text-white font-bold">
              COPIED
            </p>
          </div>
          <div className="absolute h-full w-full top-1 left-0.5 border-4 border-black rounded-full bg-black" />
        </div>
      </div>
    </section>
  );
}
