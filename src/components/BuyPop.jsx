import React, { useEffect, useState } from "react";
import Buy from "./../assets/images/buy-icepop.png";
import CopyToClipboard from "react-copy-to-clipboard";

export default function BuyPop() {
  const Value = "EARU2uBoYSSvrsz4Q215HpFX5mpAF2hze11tK44WPCjX";

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, "2000");
    }
  });

  return (
    <section
      id="buy"
      className="bg-[#9959BA] min-h-[50vh] flex flex-col items-center justify-center -mt-[150px] md:-mt-[220px] lg:-mt-[260px] xl:-mt-[320px] py-24 px-6 md:px-14 lg:px-24 relative overflow-hidden"
    >
      <div className="relative h-fit z-20 container">
        <div className="absolute h-full -z-10 w-full bg-black rounded-3xl md:rounded-[45px] lg:rounded-[64px] top-2 left-2 md:top-3 md:left-3" />
        <div className="w-full py-20 px-6 md:px-16 bg-white rounded-3xl md:rounded-[45px] lg:rounded-[64px] flex flex-col items-center justify-center gap-5 md:gap-8 lg:gap-y-12">
          <div>
            <img
              src={Buy}
              alt="Buy $ICEPOP"
              className="w-auto shrink-0 h-12 md:h-16 lg:h-24"
            />
          </div>
          <p className="text-black content_text text-base md:text-xl lg:text-2xl font-medium text-center">
            Not released yet, first we do our presale. Then $ICEPOP{" "}
            <br className="hidden lg:block" />
            will be avaliable on:
          </p>
          <div className="flex flex-col justify-center items-center gap-7">
            <div data-aos="fade-up" data-aos-delay="200" className="relative">
              <div className="h-12 md:h-16 lg:h-20 z-20 rounded-full border-4 border-black flex flex-row items-center justify-center px-9 bg-[#9959BA] relative">
                <p className="text-xs md:text-lg lg:text-[25px] text-white font-bold">
                  LIve now
                </p>
              </div>
              <div className="absolute h-full w-full top-1 left-0.5 border-4 border-black rounded-full bg-black" />
            </div>
            <CopyToClipboard
              data-aos="fade-up"
              data-aos-delay="300"
              className="relative hover:scale-90"
              text={Value}
              onCopy={() => setCopied(true)}
            >
              <span>
                <div className="h-12 md:h-16 cursor-pointer lg:h-20 z-20 rounded-full border-4 border-black flex flex-row items-center justify-center px-12 md:px-20 bg-[#9959BA] relative">
                  <p className="text-xs md:text-lg lg:text-[25px] text-white text-stroked">
                    {`CA:` + " " + Value}
                  </p>
                </div>
                <div className="absolute h-full w-full top-1 left-0.5 border-4 border-black rounded-full bg-black" />
              </span>
            </CopyToClipboard>
          </div>
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
