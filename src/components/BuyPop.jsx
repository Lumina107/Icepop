import React from "react";
import Buy from "./../assets/images/buy-icepop.png";
import Tree from "./../assets/images/tree.png";

export default function BuyPop() {
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
          <div className="flex justify-center items-center">
            <img
              src={Tree}
              className="w-auto h-24 md:h-52 lg:h-[300px] shrink-0"
              alt="Presale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
