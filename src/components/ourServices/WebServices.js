import Image from "next/image";
import { useDispatch } from "react-redux";
import { contactModalHandler } from "@/redux/ducks/modals";
function WebServices() {
  const dispatch = useDispatch();

  const pricing = [
    {
      title: "Equinox Plan",
      price: "$1,999",
      listOfItems: [
        "Up to 3 pages",
        "Basic design and layout customization",
        "Contact form integration",
        "Mobile responsive design",
        "Basic on-page SEO optimization",
      ],
      btnURL: "#.",
    },
    {
      title: "Nimbus Plan",
      price: "$4,499",
      listOfItems: [
        "Up to 7 pages",
        "Customized design and layout",
        "Integration with social media profiles",
        "Google Analytics setup and tracking",
        "Advanced on-page SEO optimization",
      ],
      btnURL: "#.",
    },
    {
      title: "Odyssey Plan",
      price: "$7,999",
      listOfItems: [
        "Up to 15 pages",
        "Advanced website functionality",
        "Customized website features",
        "Professional content creation",
        "Comprehensive SEO plan & execution",
      ],
      btnURL: "#.",
    },
  ];
  return (
    <section className="bg-violet-800 p-12 w-full">
      <h2 className="text-center text-slate-100 font-inter font-extrabold text-5xl">
        WE PROVIDE DIGITAL SOLUTIONS
      </h2>
      <div className="flex justify-evenly pt-8">
        {pricing.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-zinc-50 shadow-lg shadow-slate-100/70 rounded-xl p-14 w-1/4"
            >
              <h4 className="font-poppins font-bold text-indigo-900 text-2xl">
                {item.title}
              </h4>
              <div className="w-full">
                <div className="w-12 h-0.5 my-4 bg-purple-500"></div>
              </div>
              <h2 className="font-poppins font-bold text-5xl text-indigo-900 pt-1">
                {item.price}
              </h2>
              <div className="font-nunito font-normal text-sm text-slate-500 py-2">
                Starting
              </div>
              <ol className="py-6">
                {item.listOfItems.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="py-1 font-nunito font-nomral text-slate-500 flex justify-start"
                    >
                      <div className="relative w-4 h-auto">
                        <Image src="/check.svg" alt="check mark" fill />
                      </div>
                      <span className="pl-2">{item}</span>
                    </li>
                  );
                })}
              </ol>
              <div className="w-full flex justify-center">
                <button
                  onClick={() => dispatch(contactModalHandler())}
                  className="bg-gradient-to-tr from-indigo-600 to-purple-500 ... py-2 px-6 round rounded-3xl text-slate-100 font-poppins font-medium"
                >
                  Getting Started
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* {toggle ? <ContactUsModal /> : ""} */}
    </section>
  );
}

export default WebServices;
