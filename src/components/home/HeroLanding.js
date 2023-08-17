import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useCycle } from "framer-motion";
import { useSelector } from "react-redux";

function HeroLanding() {
  const hlGifs = [
    { vid: "/homePage/hpWebDev.gif", text: "Web Development" },
    { vid: "/homePage/hpMarket.gif", text: "Marketing" },
    { vid: "/homePage/hpNetwork.gif", text: "Networking" },
  ];

  const solutionsInfo = useSelector((state) => state.hp.solutionsInfo);
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
    <header className="md:pt-[3vw]">
      <div className="relative min-h-[65vw] md:min-h-[30vw] h-auto md:py-[11vw] lg:py-[unset] lg:min-h-[25vw] lg:max-h-[600px]">
        <div className="h-48 max-h-min">
          <motion.div
            key={currentGif.vid}
            className="w-full min-h-full absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <Image
              className="h-[100%] object-fill w-auto  "
              alt="testing"
              fill
              src={currentGif.vid}
              priority={true}
              onLoadingComplete={(img) => {
                loadHandler();
              }}
            />
          </motion.div>
        </div>

        <div className="  absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900"></div>
        <div className="text-slate-100 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ">
          <div className="relative   md:h-24 w-2/3 pt-12 mt-[70px]">
            <Image
              src={"/homePage/teckieename.svg"}
              alt="Teckiee Logo"
              fill
              priority={true}
            />
          </div>

          <div className="py-[3vw]">
            <div className="text-white  font-montserrat font-bold text-[5vw] md:text-3xl text-center">
              Let us Handle
            </div>
            <div className="text-violet-300  font-montserrat font-bold  text-[5vw] md:text-6xl  text-center">
              {textHeader}
            </div>
          </div>
          <div className=" relative bottom-[0px]    w-[20vw] h-[20vw] max-w-[60px] max-h-[60px]    md:bottom-[30px]   md:w-[10%] md:h-[15%]   ">
            <Image
              src={"/homePage/robotv2.svg"}
              alt="robot logo"
              fill
              priority={true}
            />
          </div>
        </div>
      </div>

      <div className=" bg-gradient-to-b from-indigo-900 to-slate-900 flex flex-col items-center">
        <h2 className="w-5/6 md:w-1/3  text-[5vw] font-montserrat font-normal flex justify-center md:font-thin  text-slate-100 py-8 text-1xl md:text-[4vw]  lg:text-[2.5vw] md:w-[60%] text-center ">
          WE PROVIDE <br /> DIGITAL SOLUTIONS
        </h2>

        <div className="flex  gap-[2em] justify-evenly flex-wrap  items-center pb-12 md:flex-row  border-indigo-600 max-w-[1200px] w-full ">
          {solutionsInfo.map((item, index) => {
            return (
              <div
                key={index}
                className="w-4/5 h-[30em]  max-w-[300px] max-h-[400px]  py-4 px-4 mb-4 text-slate-100 flex flex-col justify-evenly bg-gradient-to-br rounded-2xl from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)]  md:w-1/3 border border-[rgba(255,255,255,0.4)] "
              >
                <Image
                  src={item.svgURL}
                  alt={"Logo"}
                  width={0}
                  height={0}
                  unoptimized
                  className="w-[8em]  2xl:w-[7em] h-auto"
                />

                <h4 className="text-[6vw] leading-[1em]  w-[70%] py-1 font-montserrat font-normal text-lg md:text-[1.7em]">
                  {item.title}
                </h4>
                <p className="py-1  font-light">{item.p}</p>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default HeroLanding;
