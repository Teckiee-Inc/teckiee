import { useEffect, useState } from "react";

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
    <div className="flex justify-center bg-slate-100 py-32">
      <div className="flex flex-col items-center w-4/5 bg-indigo-950 rounded-2xl p-6">
        <div className="text-slate-100 w-20 h-20 bg-pink-500 border-yellow-300 border-2 rounded-full flex justify-center items-center">
          {/* image goes here */}
        </div>
        <p className="w-full text-violet-400 my-6  font-inter text-lg text-center font-normal">
          &quot;{qouteData.quote}&quot;
        </p>
        <div className="w-full text-slate-400 font-fira font-light text-sm text-center">
          {qouteData.author}
        </div>
      </div>
    </div>
  );
}
export default Quote;
