import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useCycle } from "framer-motion";
import { useSelector } from "react-redux";

function HeroLanding() {
  const hlGifs = [
    { vid: "/hpWebDev.gif", text: "Web Development" },
    { vid: "/hpMarket.gif", text: "Marketing" },
    { vid: "/hpNetwork.gif", text: "Networking" },
  ];

  const solutionsInfo = useSelector(state => state.hp.solutionsInfo);
  const [currentGif, cycleGifs] = useCycle(...hlGifs);
  const [textHeader, setTextHeader] = useState(currentGif.text);
  const isLoadedRef = useRef(false);
  const cycleGifsRef = useRef(cycleGifs);

  const loadHandler = () => {
    isLoadedRef.current = true;
  };

  useEffect(() => {
    setTextHeader(currentGif.text);

    const letters = "abcdefghijklmnopqrstuvwxyz";
    let iterations = 0;

    const interval = setInterval(() => {
      const randomText = currentGif.text
        .split("")
        .map((item, index) => {
          if (index < iterations) {
            return currentGif.text[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= currentGif.text.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3;
      setTextHeader(randomText);
    }, 30);

    const gifLooper = setInterval(() => {
      if (!isLoadedRef.current) {
        cycleGifsRef.current();
      }
      isLoadedRef.current = false;
    }, 3000);

    const cleanUp = () => {
      clearInterval(interval);
      clearInterval(gifLooper);
    };

    return cleanUp;
  }, [currentGif]);

  return (
    <header className="pt-16">
      <div className="relative">
        <div className="h-48">
          <motion.div
            key={currentGif.vid}
            className="w-full min-h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <Image
              className="h-auto w-auto"
              alt="testing"
              fill
              src={currentGif.vid}
              priority={true}
              onLoadingComplete={img => {
                loadHandler();
              }}
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900"></div>
        <div className="text-slate-100 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ">
          <div className="relative h-24 w-1/2 pt-12">
            <Image
              src={"/teckieename.svg"}
              alt="Teckiee Logo"
              fill
              priority={true}
            />
          </div>

          <div className="py-6">
            <div className="text-white font-montserrat font-bold lg:text-3xl text-center">
              Let us Handle
            </div>
            <div className="text-violet-300 font-montserrat font-bold lg:text-3xl text-center">
              {textHeader}
            </div>
          </div>
          <div className="relative w-full h-48">
            <Image src={"/robotv2.svg"} alt="robot logo" fill priority={true} />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-indigo-900 to-slate-900 ...">
        <h2 className="flex justify-center text-slate-100 py-8 font-inter font-extrabold text-3xl text-center ">
          WE PROVIDE DIGITAL SOLUTIONS
        </h2>
        <div className="flex flex-col justify-evenly items-center pb-12">
          {solutionsInfo.map((item, index) => {
            return (
              <div
                key={index}
                className="w-4/5 py-4 px-4 mb-4 text-slate-100 bg-gradient-to-r rounded-2xl from-indigo-400 to-indigo-950"
              >
                <Image
                  src={item.svgURL}
                  alt={"Logo"}
                  width={0}
                  height={0}
                  className="py-1 h-10 w-10"
                />
                <h4 className=" py-1 font-montserrat font-normal text-lg">
                  {item.title}
                </h4>
                <p className="py-1 font-fira font-light">{item.p}</p>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default HeroLanding;
