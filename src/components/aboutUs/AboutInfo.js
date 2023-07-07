import Image from "next/image";
const values = [
  {
    icon: "",
    title: "Tenacity",
    valueText:
      "Demonstrating determination, perseverance, and resilience in overcoming challenges.",
  },
  {
    icon: "",
    title: "Equality",
    valueText:
      "Treating everyone with fairness, respect, and equal opportunities.",
  },
  {
    icon: "",
    title: "Collaboration",
    valueText:
      "Working together, fostering teamwork, and leveraging collective strengths.",
  },
  {
    icon: "",
    title: "Honesty",
    valueText:
      "Being truthful, transparent, and maintaining high ethical standards.",
  },
];
function AboutInfo() {
  return (
    <div className="bg-slate-100">
      <section className="py-6 ">
        <div className="flex flex-col items-center">
          <h2 className="py-4 text-center font-inter text-2xl font-semibold">
            The Dream Team Driving Innovation
          </h2>
          <p className="text-sm w-4/5 text-center">
            The team of passionate individuals who drive our success. With a
            shared commitment to excellence, we embrace diversity and foster an
            inclusive environment. Our team members bring diverse backgrounds,
            skills, and experiences, united by their dedication to delivering
            outstanding results.
          </p>
        </div>
        <div>{/* image here */}</div>
      </section>

      <section className="flex flex-col items-center">
        <h2 className="text-center font-inter text-2xl font-semibold">
          Our Mission
        </h2>
        <p className="text-center w-4/5 text-sm ">
          At Teckiee we want to redefine excellence in the tech industry. We are
          committed to providing elite services that exceed customer
          expectations. With unwavering honesty and dedication, we deliver the
          highest quality solutions, ensuring our customers receive unmatched
          value for their investment.
        </p>
      </section>

      <section className="py-12 ">
        <h2 className="text-center font-inter font-semibold text-2xl">
          Our Core Values
        </h2>
        <div className="flex flex-col items-center">
          {values.map((item, index) => {
            return (
              <div
                key={index}
                className="p-4 my-2 w-4/5  shadow-lg shadow-slate-400 rounded-lg"
              >
                {/* icon goes here */}
                <h3 className="font-inter text-lg font-bold">{item.title}</h3>
                <p className="text-sm">{item.valueText}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default AboutInfo;
