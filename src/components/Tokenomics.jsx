import React from "react";
import Tokenomic from "./../assets/images/tokenomics.png";
import FirstChart from "./../assets/images/first_chart.png";
import SecondChart from "./../assets/images/second_chart.png";
import Supply from "./../assets/images/supply-breakdown.png";
import Parcel from "./../assets/images/parsel.png";

export default function Tokenomics() {
  return (
    <section
      id="token"
      className="flex items-center justify-center pb-20 pt-10 -mt-2 bg-[#73EFDF]"
    >
      <div className="container px-6 md:px-16 lg:px-20">
        <img
          data-aos="fade-up"
          src={Tokenomic}
          alt="Tokenomics"
          className="h-20 md:h-28 lg:h-36 w-auto mx-auto mb-14"
        />
        <div className="w-full py-10 md:py-20 px-6 md:px-16 container bg-white rounded-3xl md:rounded-[45px] lg:rounded-[64px] flex flex-col items-start justify-start border-[15px] border-[#9959BA]">
          <div className="w-full justify-center items-center grid md:grid-cols-2 gap-14">
            <img
              src={Supply}
              className="w-auto h-20 lg:h-28 block md:hidden shrink-0 mb-3 max-w-xs"
              alt="Chart"
            />
            <div className="flex items-center justify-center">
              <img
                src={FirstChart}
                className="w-full h-auto max-w-xs mx-auto"
                alt="Chart"
              />
            </div>

            <div>
              <img
                src={Supply}
                className="w-auto h-20 lg:h-28 hidden md:block shrink-0 mb-3 max-w-xs"
                alt="Chart"
              />

              <h3 className="text-xl md:text-2xl lg:text-3xl font-black content_text mb-5">
                Total Supply: 1 Billion Tokens
              </h3>
              <div className="flex flex-col gap-7">
                <div className="flex items-start gap-2.5">
                  <span className="h-3 w-3 mt-1.5 rounded-full bg-[#691892] inline-block flex-shrink-0" />
                  <span className="text-lg content_text font-semibold">
                    {" "}
                    60% of Supply to Presale Participants
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="h-3 w-3 mt-1.5 rounded-full bg-[#9541C1] inline-block flex-shrink-0" />
                  <span className="text-lg content_text font-semibold">
                    15% of Supply to LP
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="h-3 w-3 mt-1.5 rounded-full bg-[#B867E3] inline-block flex-shrink-0" />
                  <span className="text-lg content_text font-semibold">
                    {" "}
                    10% of Tokens for Exchanges + Market Making <br />
                    5% for CEX <br /> 5% for Market Making
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="h-3 w-3 mt-1.5 rounded-full bg-[#D58EFA] inline-block flex-shrink-0" />
                  <span className="text-lg content_text font-semibold">
                    10% Marketing <br /> 5% Strategic Partnerships (Top
                    communities) <br />
                    5% KOLs/Influencers
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="h-3 w-3 rounded-full bg-[#EAC3FF] inline-block flex-shrink-0 mt-1.5" />
                  <span className="text-lg content_text font-semibold">
                    5% Team / Advisors <br /> 3% Team (Vested for 2 Year) <br />
                    2% Advisors
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-10 md:py-20 px-6 md:px-16 container bg-white rounded-3xl md:rounded-[45px] lg:rounded-[64px] flex flex-col items-start justify-start border-[15px] border-[#9959BA] mt-12">
          <div className="w-full grid md:grid-cols-2 items-center justify-center gap-14">
            <img
              src={Parcel}
              className="w-auto h-20 lg:h-28 block md:hidden shrink-0 mb-3 max-w-xs"
              alt="Chart"
            />

            <div className="flex items-center justify-center">
              <img
                src={SecondChart}
                className="w-full h-auto max-w-xs mx-auto"
                alt="Chart"
              />
            </div>

            <div>
              <img
                src={Parcel}
                className="w-auto h-20 lg:h-28 hidden md:block shrink-0 mb-3 max-w-xs"
                alt="Chart"
              />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black content_text mb-5">
                Presale breakdown
              </h3>
              <div className="flex flex-col gap-7">
                <div className="flex items-start gap-2.5">
                  <span className="h-3 w-3 mt-1.5 rounded-full bg-[#9959BA] inline-block flex-shrink-0" />
                  <span className="text-lg content_text font-semibold">
                    50% of Raise to LP
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="h-3 w-3 mt-1.5 rounded-full bg-[#73EFDF] inline-block flex-shrink-0" />
                  <span className="text-lg content_text font-semibold">
                    50% of Raise for Expenses / Marketing / Development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
