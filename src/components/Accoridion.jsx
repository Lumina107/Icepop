import React from "react";
import Plus from "./../assets/icons/plus.png";

export default function Accoridion(props) {
  return (
    <div className="relative w-full">
      <div
        className={`bg-[#9959ba] p-1.5 rounded-full ${
          !props.true && "pl-6 border-[6px] border-black"
        } flex items-center justify-between w-full`}
      >
        <h4 className="text-white text-stroked text-lg md:text-xl">
          {props.question}
        </h4>
        <img
          src={Plus}
          alt="Plus"
          className={`h-8 transition-transform ease-in-out duration-500 ${
            props.true && "rotate-45"
          } w-auto`}
        />
      </div>
      <div
        className={`transition-opacity mt-1 ${
          props.true ? "opacity-100" : "opacity-0"
        } ease-in-out duration-500`}
      >
        <p className="text-white text-stroked text-lg text-left max-w-md">
          {props.answer}
        </p>
      </div>
    </div>
  );
}
