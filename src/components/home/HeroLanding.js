import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Typed from "typed.js";

function HeroLanding() {
  const typedRef = useRef(null);
  //   const prompt = "hello world";
  //   const data = {
  //     promptData: [prompt],
  //   };
  //   console.log(data);
  useEffect(() => {
    const options = {
      strings: [
        `Let Us Handle <span class="text-indigo-500 ">Web Design!</span>`,
        `Let Us Handle <span class="text-indigo-500 ">Graphic Design!</span>`,
        `Let Us Handle <span class="text-indigo-500 ">Marketing!</span>`,
        `Let Us Handle <span class="text-indigo-500 ">Social Media!</span>`,
        `Let Us Handle <span class="text-indigo-500 ">Networking!</span>`,
        `Let Us Handle <span class="text-indigo-500 ">Custom Solutions!</span>`,
        `Let Us Handle <span class="text-indigo-500 ">IT</span> all!`,
      ],
      typeSpeed: 45,
      backSpeed: 95,
      loop: true,
      cursorChar: "|",
    };

    typedRef.current = new Typed("#typed", options);

    return () => {
      typedRef.current.destroy();
    };
  }, []);
  const solutionsInfo = [
    {
      svgURL: "/web.svg",
      title: "Web & App Development",
      p: "We create custom websites and web apps that are fast, user-friendly, and optimized for search engines.",
    },
    {
      svgURL: "/networking.svg",
      title: "Networking Solutions",
      p: "We'll work with you to design and implement secure, reliable networks that meet the unique needs of your business.",
    },
    {
      svgURL: "/design.svg",
      title: "Design & Marketing",
      p: "Our team can help you create a powerful brand through graphic design, branding, social media, and SEO.",
    },
  ];
  return (
    <header className="pt-16">
      <div className="flex justify-between">
        <span></span>
        <span className="text-red-900"></span>
      </div>
      <div className="relative">
        <video className="w-full h-auto" type="video/mp4" autoPlay muted loop>
          <source src="/heroVideov3.mp4" />
        </video>
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
            <span
              id="typed"
              style={{ whiteSpace: "pre" }}
              className="font-montserrat font-bold text-xl"
            />
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
                className="w-4/5 py-4 px-24 mb-4 text-slate-100 bg-gradient-to-r rounded-2xl from-indigo-400 to-indigo-950"
              >
                <Image
                  src={item.svgURL}
                  alt={"Logo"}
                  width={0}
                  height={0}
                  className="py-1 h-10 w-10"
                />
                <h4 className="py-1 font-montserrat font-normal text-lg">
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
