const info = [
  {
    title: "Expertise",
    paragraph:
      "Expertise in networking, web development, and design for tailored solutions.",
  },
  {
    title: "Security",
    paragraph:
      "Robust data security measures for peace of mind and protection of valuable information.",
  },
  {
    title: "Communication",
    paragraph:
      "Open communication and collaborative partnerships for bringing your vision to life and achieving your goals.",
  },
];

function Info() {
  return (
    <div className="bg-black py-6">
      <div className="">
        <h1 className="text-slate-100 text-center font-inter text-2xl font-bold ">
          Why Choose Teckiee?
        </h1>
        <p className="text-slate-100 text-center text-sm">
          unmatched expertise in networking, web development, and design. We
          deliver innovative solutions that drive your success, backed by a team
          of skilled professionals.
        </p>
      </div>

      <div className="flex justify-center flex-col items-center">
        {info.map((item, index) => {
          return (
            <div
              key={index}
              className="w-4/5 p-4 rounded-lg m-2  bg-gradient-to-br from-transparent to-gray-950 shadow-indigo-950 shadow-md"
            >
              <h1 className="text-slate-100 text-center text-lg font-bold font-inter">
                {item.title}
              </h1>
              <p className="text-gray-500 text-center text-sm">
                {item.paragraph}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Info;
