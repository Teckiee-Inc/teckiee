import { useState } from "react";

function BusinessPartners() {
  const [Companies, setCompanies0] = useState([
    {
      src: "Company",
      alt: "Company Logo",
    },
    {
      src: "Company",
      alt: "Company Logo",
    },
    {
      src: "Company",
      alt: "Company Logo",
    },
    {
      src: "Company",
      alt: "Company Logo",
    },
    {
      src: "Company",
      alt: "Company Logo",
    },
  ]);
  return (
    <section className="bg-indigo-950 p-10">
      <h4 className="text-violet-400 text-center font-montserrat font-normal">
        Trusted by Big PP Companies
      </h4>
      <div className="flex justify-evenly">
        {Companies.map((item, index) => {
          // <img src={item.src} alt={item.alt} key={index}/>
          return (
            <div className="text-slate-100 py-6" key={index}>
              {item.src}
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default BusinessPartners;
