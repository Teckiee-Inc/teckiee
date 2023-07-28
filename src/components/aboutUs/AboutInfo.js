import Image from "next/image";

import Info from "../home/services/Info";
const values = [
  {
    title: "Tenacity",
    valueText:
      "Demonstrating determination, perseverance, and resilience in overcoming challenges.",
    icon: "/tenacity.png",
  },
  {
    title: "Equality",
    valueText:
      "Treating everyone with fairness, respect, and equal opportunities.",
    icon: "/tenacity.png",
  },
  {
    title: "Collaboration",
    valueText:
      "Working together, fostering teamwork, and leveraging collective strengths.",
    icon: "/tenacity.png",
  },
  {
    title: "Honesty",
    valueText:
      "Being truthful, transparent, and maintaining high ethical standards.",
    icon: "/tenacity.png",
  },
];
function AboutInfo() {
  return (
    <div className="bg-slate-100 text-[Montserrat] ">
      <div className="max-w-[1700px] mx-auto">
        <section className="py-6 ">
          <div
            className="py-10 md:py-20 xl:py-[10vw] text-white"
            style={{
              backgroundImage: "url(/Mission.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="flex items-center flex-col justify-center h-full">
              <h2 className="py-4 text-center font-[Montserrat] text-[8vw] md:text-[4vw] font-semibold">
                Our Mission
              </h2>

              <p className="font-[Montserrat] text-sm w-4/5 md:w-2/3 2xl: w-3/5 text-center md:text-[.9em] font-thin 2xl:w-1/2 leading-[1.8em]">
                At Teckiee we want to redefine excellence in the tech industry.
                We are committed to providing elite services that exceed
                customer expectations. With unwavering honesty and dedication,
                we deliver the highest quality solutions, ensuring our customers
                receive unmatched value for their investment.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center px-[10vw] py-20">
          <div className="text-center md:text-left md:w-1/2">
            <h2 className=" font-[Montserrat] leading-[1em] font-bold text-[7vw] md:text-[4vw] xl:text-[3em] font-semibold">
              The Dream Team <br /> Driving Innovation
            </h2>
            <br />
            <p className="font-[Montserrat] w-4/5  mx-auto md:mx-0 md:w-full  xl:w-3/4 leading-[2em] text-sm ">
              The team of passionate individuals who drive our success. With a
              shared commitment to excellence, we embrace diversity and foster
              an inclusive environment. Our team members bring diverse
              backgrounds, skills, and experiences, united by their dedication
              to delivering outstanding results.
            </p>
          </div>
          {/* image */}
          <div className=" border w-full h-[50vw] md:h-[30vw] xl:h-[25vw] md:w-1/2 md:h-100% shadow  relative  rounded-3xl ">
            <Image
              src={"/mission_woman.jpg"}
              alt="Teckiee Logo"
              fill
              unoptimized
              priority={true}
              className="rounded-lg   object-cover "
            />
          </div>
        </section>

        <section className="py-12  flex flex-col md:flex-row border bg-white">
          <div className="md:w-1/2 text-center  md:flex items-center justify-evenly ">
            <h2 className=" font-[Montserrat] leading-[1em] font-bold text-[10vw] md:text-[4vw] xl:text-[3em] font-semibold">
              Our Core
              <br /> Values
            </h2>
          </div>

          <div className=" md:w-1/2 flex flex-col md:flex-row items-center justify-evenly   flex-wrap  ">
            {values.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-4  my-2 w-4/5 py-10 md:py-0 md:w-[15vw] 2xl:py-10  items-center text-center md:text-left md:items-start md:h-[15vw] md:min-w-[35%] flex flex-col items-start 2xl:gap-[1em] justify-start gap-[.4vw]  md:min-h-[50%] max-w-[350px]   shadow-lg shadow-slate-400 bg-white rounded-lg"
                >
                  {/* icon goes here */}
                  <img
                    src={item.icon}
                    className="w-[20vw]  h-[20vw] md:w-[5vw] md:h-[5vw] max-w-[70px] max-h-[70px] object-contain"
                  />
                  <h3 className="font-[Montserrat] md:text-[1.5vw] 2xl:text-[20px] text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="text  md:text-[1vw] xl:text-[.9em] font-[Montserrat]">
                    {item.valueText}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <Info />
    </div>
  );
}

export default AboutInfo;
