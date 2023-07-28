const info = [
  {
    title: "Expertise",
    paragraph:
      "Expertise in networking, web development, and design for tailored solutions.",
    image: "/workspace.png",
  },
  {
    title: "Security",
    paragraph:
      "Robust data security measures for peace of mind and protection of valuable information.",
    image: "/workspace.png",
  },
  {
    title: "Communication",
    paragraph:
      "Open communication and collaborative partnerships for bringing your vision to life and achieving your goals.",
    image: "/workspace.png",
  },
];

function Info() {
  return (
    <div className="bg-black py-6 font-montserrat">
      <div className=" flex flex-col items-center">
        <h1 className="text-slate-100 text-center  text-[10vw] md:text-[5vw] md:w-[50%] mx-auto font-extrabold ">
          Why Choose Teckiee?
        </h1>

        <p className="text-slate-100 text-center text-sm md:text-lg w-4/5 md:w-2/3 lg:w-1/3">
          unmatched expertise in networking, web development, and design. We
          deliver innovative solutions that drive your success, backed by a team
          of skilled professionals.
        </p>
      </div>
      <br />

      <div className="flex  gap-[2em] justify-evenly flex-wrap text-center   items-center pb-12 md:flex-row mx-auto border-indigo-600 max-w-[1200px] w-full ">
        {info.map((item, index) => {
          return (
            <div
              key={index}
              className="w-4/5 h-[30em]  max-w-[300px] max-h-[350px]  py-4 px-4 mb-4 text-slate-100 flex flex-col justify-evenly items-center bg-gradient-to-br rounded-2xl from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)]  md:w-1/3 border border-[rgba(255,255,255,0.4)] "
            >
              <img src={item.image} className=" lg:w-[5vw] " />

              <h4 className="text-[5vw] leading-[1em]   py-1 font-montserrat font-bold text-lg md:text-[1.7em]">
                {item.title}
              </h4>
              <p className="py-1 text-[0.8em]  font-light">{item.paragraph}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Info;
