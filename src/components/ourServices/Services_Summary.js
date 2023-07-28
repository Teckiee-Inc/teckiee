import React from "react";

import Image from "next/image";
import { useSelector } from "react-redux";

const Services_Summary = () => {
  const solutionsInfo = useSelector(state => state.hp.solutionsInfo);
  return (
    <div>
      <div className=" bg-zinc-100 flex flex-col items-center">
        <h2 className="w-5/6 md:w-1/3  flex justify-center font-montserrat font-thin text-[#1F1F1F] py-8 md:py-20  font-extrabold text-[8vw] leading-[1em] md:text-5xl text-center ">
          WE PROVIDE DIGITAL SOLUTIONS
        </h2>

        <div className="flex  gap-[2em] justify-evenly flex-wrap   items-center pb-12 md:flex-row  border-indigo-600 max-w-[1200px] w-full ">
          {solutionsInfo.map((item, index) => {
            return (
              <div
                key={index}
                className="w-4/5 h-[30em]  max-w-[300px] max-h-[400px] shadow-lg shadow-[#1F1F1F]-100/70  py-4 px-4 mb-4 text-[#1F1F1F] flex flex-col justify-evenly bg-gradient-to-br rounded-2xl from-[rgb(255,255,255)] to-transparent  md:w-1/3 border border-[rgba(255,255,255,0.4)] "
              >
                <Image
                  src={item.svgURL}
                  alt={"Logo"}
                  width={0}
                  height={0}
                  unoptimized
                  className="w-[8em]  2xl:w-[7em] h-auto"
                />

                <h4 className="text-[6vw] leading-[1em]  w-[70%] py-1 font-montserrat font-medium text-lg md:text-[1.7em]">
                  {item.title}
                </h4>
                <p className="py-1  font-light">{item.p}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services_Summary;
