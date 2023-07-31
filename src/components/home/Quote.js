import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { randomQuote } from "@/redux/ducks/quotes";

function Quote() {
  const quoteData = useSelector(state => state.quotes.quoteOnLoad);
  const dispatch = useDispatch();
  // console.log(quoteData);

  useEffect(() => {
    dispatch(randomQuote());
  }, []);

  return (
    <div
      className="py-32 bg-gradient-to-b from-slate-900 to-slate-300"
      // style={{
      //   backgroundImage: `url(/quote_bg.jpg)`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="flex flex-cols md:flex-row justify-center max-w-[1000px] font-montserrat  mx-auto ">
        {/* QUOTES DIV */}
        <div className="flex flex-col justify-between  items-center  ">
          {/* FIRST QUOTE */}
          <div className="flex flex-col items-center w-4/5  bg-indigo-950 rounded-2xl p-6 max-w-md">
            <div className=" relative  text-slate-100 w-20 h-20 bg-[#0C0C50] border-yellow-300 border-2 overflow-hidden rounded-full flex justify-center items-center">
              {/* image goes here */}
              <Image
                src={"/guy_quote.jpg"}
                alt="Teckiee Logo"
                fill
                priority={true}
                className="object-fit "
              />
            </div>
            <p className="w-full text-white my-6  font-inter text-lg text-center font-normal ">
              &quot;{quoteData.quote}&quot;
            </p>

            <p className="w-full text-slate-400 font-fira font-light text-sm text-center">
              {quoteData.author}
            </p>
          </div>

          {/* SECOND QUOTE */}
          <div className="flex justify-center ">
            <h2 className="w-4/5 text-center my-6 py-10 px-6 rounded-lg bg-white shadow">
              At Teckiee, We Are Committed to Driving Business Growth.
            </h2>
          </div>
        </div>

        {/* JUST THE IMAGE OF THE WOMAN STARTTS HERE */}
        <div className=" md:w-1/2 md:h-100% relative object-cover bg-[#0C0C50] rounded-3xl">
          {/* image goes here */}
          <Image
            src={"/woman_quote.jpg"}
            alt="Teckiee Logo"
            fill
            unoptimized
            priority={true}
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
export default Quote;
