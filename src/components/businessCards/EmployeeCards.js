import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function EmployeeCards() {
  const [toggle, setToggle] = useState(0);
  //   const [input, setInput] = useState("");
  const employeeInfo = [
    {
      name: "Michael Trevino",
      title: "Managing Partner",
      info: [
        { contactType: "PH#", contact: "(956) 123 - 4567" },
        { contactType: "WEBSITE", contact: "www.teckiee.com" },
        { contactType: "DISCORD", contact: "mikeStillFabulous" },
        { contactType: "EMAIL ADDRESS", contact: "m.trevino@teckiee.com" },
      ],

      skills: ["Javascript", "CSS", "HTML", "Leadership"],
      aboutMe: "I have a strong passion in coding and helping others.",
      socialLinks: [
        { linkImg: "/twitterLogo.svg", imgURL: "#", altText: "Twitter Logo" },
        { linkImg: "/linkedinLogo.svg", imgURL: "#", altText: "LinkedIn Logo" },
        {
          linkImg: "/instagramLogo.svg",
          imgURL: "#",
          altText: "Instagram Logo",
        },
      ],
    },
  ];
  return (
    <div className="bg-blue-950 h-screen flex flex-col justify-between items-center">
      <div className="relative w-full h-44 min-h-46 min-h-46 object-cover ">
        <Image src="/bc_bgv2.png" alt="watery cave" fill priority={true} />
      </div>

      <div className="absolute w-full z-40 top-0 left-0  mb-12">
        <div className="w-full h-44 relative ">
          {/* <div
            id="hexagon"
            className=" flex w-full absolute top-12 z-50 justify-center items-center flex-col"
          >
            <span class="before:block before:absolute before:-inset-5 before:-skew-y-6 before:bg-pink-500 relative inline-block">
              <span class="relative text-white">annoyed</span>
            </span>
          </div> */}

          <Image
            src="/hexagon.svg"
            alt="hexagon shape"
            fill
            className="pt-5"
            priority={true}
          />
          <Image
            src="/dummyshot.png"
            alt="employee headshot"
            fill
            className="px-28 py-6"
            priority={true}
          />
        </div>
      </div>

      {employeeInfo.map((item, index) => {
        return (
          <div key={index} className="pt-10">
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-poppins text-yellow-200 text-2xl font-medium">
                {item.name}
              </h3>
              <h4 className="font-poppins font-light text-sm text-cyan-200 opacity-90">
                {item.title}
              </h4>
            </div>

            {toggle === 0 &&
              item.info.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center flex-col py-3"
                  >
                    <h3 className="text-slate-100 font-poppins font-semibold">
                      {item.contactType}
                    </h3>
                    <h4 className="text-cyan-200 font-poppins font-light">
                      {item.contact}
                    </h4>
                  </div>
                );
              })}

            {toggle === 1 && (
              <h2 className="p-12 text-center w-full text-cyan-200 font-poppins font-bold text-2xl">
                Opened Messenger
              </h2>
            )}

            {toggle === 2 && (
              <div className="flex flex-col items-center">
                <div className="flex justify-evenly w-4/5 py-4">
                  {employeeInfo[0].socialLinks.map((item, index) => {
                    return (
                      <div key={index} className="relative w-1/3 h-12">
                        <Link
                          href={item.imgURL}
                          className="relative w-full h-full block"
                        >
                          <Image
                            src={item.linkImg}
                            alt={item.altText}
                            fill
                            priority={true}
                            className="p-2"
                          />
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between w-full">
                  <div className="w-1/5 py-4 px-6">
                    <h3 className="text-slate-100 font-semibold font-poppins">
                      SKILLS
                    </h3>
                    <ul className="font-poppins font-normal text-cyan-200">
                      {item.skills.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="w-3/5 p-4 ">
                    <h3 className="text-slate-100 font-semibold font-poppins">
                      ABOUT ME
                    </h3>
                    <p className="font-poppins  text-cyan-200">
                      {item.aboutMe}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div className="w-full text-center">
        <Link href={toggle === 0 ? "/vcard.vcf" : "#."} download={true}>
          <button className="mb-6 py-2 px-8 text-slate-100 rounded-full bg-gradient-to-r from-violet-700 to-violet-500 ... shadow-lg shadow-sky-950/50">
            {toggle === 2 ? "Download Resume" : "Add to Contacts"}
          </button>
        </Link>
      </div>
      <nav className="flex justify-evenly w-full bg-slate-50 ">
        <div
          onClick={() => setToggle(0)}
          className={`relative w-1/3 h-16 ${
            toggle === 0
              ? "bg-gradient-to-tr from-violet-900 to-violet-500 ... shadow-lg shadow-sky-950/50"
              : ""
          }`}
        >
          <Image
            src={toggle === 0 ? "/phoneLight.svg" : "/phoneDark.svg"}
            alt="testing"
            fill
            priority={true}
            className="py-4"
          />
        </div>
        <div
          onClick={() => setToggle(1)}
          className={`relative w-1/3 h-16 border-r border-l border-slate-300 ${
            toggle === 1
              ? "bg-gradient-to-tr from-violet-900 to-violet-500 ... shadow-lg shadow-sky-950/50"
              : ""
          }`}
        >
          <Link
            href={"http://m.me/teckiees"}
            className="relative w-full h-full block"
          >
            <Image
              src={toggle === 1 ? "/fbMsgLight.svg" : "/fbMsgDark.svg"}
              alt="testing"
              fill
              priority={true}
              className="py-4"
            />
          </Link>
        </div>
        <div
          onClick={() => setToggle(2)}
          className={`relative w-1/3 h-16 ${
            toggle === 2
              ? "bg-gradient-to-tr from-violet-900 to-violet-500 ... shadow-lg shadow-sky-950/50"
              : ""
          }`}
        >
          <Image
            src={toggle === 2 ? "/cardLight.svg" : "/cardDark.svg"}
            alt="testing"
            fill
            priority={true}
            className="py-4"
          />
        </div>
      </nav>
    </div>
  );
}

export default EmployeeCards;
