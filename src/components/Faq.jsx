import React, { useState } from "react";
import Faqs from "./../assets/images/faq.png";
import Accoridion from "./Accoridion";
import Icepop from "./../assets/images/tweet_profile.png";
import { FaXTwitter } from "react-icons/fa6";
import Footer_video from "./../assets/logo.mp4";
import ReactPlayer from "react-player";

export default function Faq() {
  const [open, setOpen] = useState(999);
  return (
    <section
      id="faq"
      className="relative pt-7 -mt-2 bg-white flex flex-col items-center"
    >
      <div className="container px-10 flex flex-wrap lg:flex-nowrap gap-10 justify-center items-center">
        <div className="relative bg-[#9959BA] h-64 w-64 rounded-full overflow-hidden lg:mr-[140px] xl:mr-[200px] shrink-0">
          {/* <ReactPlayer
            url={Footer_video}
            controls={false}
            playing={true}
            muted={true}
            loop={true}
            onReady={() => {
              playing: true;
            }}
            style={{
              position: "absolute",
              height: "480px",
              width: "640px",
              left: "-150px",
              top: 0,
            }}
          /> */}

          <video
            className="absolute"
            autoPlay={"autoplay"}
            playsInline
            muted
            loop
            height={640}
            width={320}
          >
            <source src={Footer_video} type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col lg:flex-row items-center max-w-xl w-full relative z-20">
          <div className="relative lg:absolute left-0 lg:-left-[220px] xl:-left-[280px] rotate-[80deg] lg:rotate-0">
            <img
              src={Faqs}
              alt="FAQ"
              className="w-40 md:w-64 shrink-0 lg:w-[300px] xl:w-[350px] h-auto "
            />
          </div>
          <div className=" w-full gap-2 flex flex-col">
            {Questions.map((items, idx) => (
              <button
                key={idx}
                className={`transition-all ease-in-out ${
                  open === idx
                    ? "bg-[#9959ba] p-2 border-[6px] border-black h-44"
                    : "h-14"
                } duration-500 rounded-3xl flex items-start`}
                onClick={() => {
                  if (open !== idx) {
                    setOpen(idx);
                  } else {
                    setOpen(999);
                  }
                }}
              >
                <Accoridion
                  question={items.question}
                  answer={items.answer}
                  true={open === idx ? true : false}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="relative py-10 w-full flex flex-col items-center justify-center bg-[#9959BA] mt-10 z-10">
        <img src={Icepop} alt="ICEPOP" className="h-14 w-auto" />
        <div className="flex items-center gap-5 mt-4">
          <a
            href="https://x.com/icepopcoin?s=11"
            className="text-3xl text-white hover:text-[#73EFDF] transition-colors ease-in-out duration-300"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}

const Questions = [
  {
    question: "What chain is ICEPOP on?",
    answer: "$ICEPOP is on Solana (SOL)",
  },
  {
    question: "Who is the Team?",
    answer:
      " $ICEPOP is built by the Tier-1 marketing firm Lumina, Founded by Rhys Mckay who also is the co-founder of Basebet.",
  },
  {
    question: "How can I buy $ICEPOP",
    answer:
      "You can participate in our presale. Post launch you will be able to buy via different CEXs & DEXs.",
  },
  {
    question: "Wen launch",
    answer: "July 2024.",
  },
];
