import { useEffect, useState } from "react";
import Image from "next/image";

function Quote() {
  const quoteOfTheDay = [
    {
      quote:
        "Any sufficiently advanced technology is indistinguishable from magic.",
      author: "- Arthur C. Clarke",
    },
    {
      quote: "Quality is not an act, it is a habit.",
      author: "- Aristotle",
    },
    {
      quote: "The best way to predict the future is to invent it.",
      author: "- Alan Kay",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "- Steve Jobs",
    },
    {
      quote: "Don't be afraid to give up the good to go for the great.",
      author: "- John D. Rockefeller",
    },
    {
      quote:
        "Marketing is no longer about the stuff that you make, but about the stories you tell.",
      author: "- Seth Godin",
    },
    {
      quote: "Innovation distinguishes between a leader and a follower",
      author: "- Steve Jobs",
    },
    {
      quote:
        "Networking is not about just connecting people. It's about connecting people with people, people with ideas, and people with opportunities.",
      author: "- Michele Jennae",
    },
  ]; // dummy data

  const [qouteData, setQuoteData] = useState("");
  useEffect(() => {
    const index = Math.floor(Math.random() * quoteOfTheDay.length);
    setQuoteData(quoteOfTheDay[index]);
  }, []);
  // console.log(quoteChooser());
  return (
    <div
      className="   py-32 "
      style={{
        backgroundImage: `url(/quote_bg.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-cols md:flex-row justify-center max-w-[1000px] font-montserrat  mx-auto ">
        {/* QUOTES DIV */}
        <div className="flex flex-col justify-between  items-center  ">
          {/* FIRST QUOTE */}
          <div className="flex flex-col items-center w-4/5  bg-indigo-950 rounded-2xl p-6">
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
            <p className="w-full text-white my-6  font-inter text-lg text-center font-normal">
              &quot;{qouteData.quote}&quot;
            </p>

            <p className="w-full text-slate-400 font-fira font-light text-sm text-center">
              {qouteData.author}
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
        <div className=" md:w-1/2 md:h-100% relative bg-pink-200  object-contain rounded-3xl  bg-[#0C0C50]">
          {/* image goes here */}
          <Image
            src={"/woman_quote.jpg"}
            alt="Teckiee Logo"
            fill
            unoptimized
            priority={true}
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}
export default Quote;
