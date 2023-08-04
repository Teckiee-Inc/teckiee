import Image from "next/image";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { contactModalHandler } from "@/redux/ducks/modals";
function WebServices() {
  const dispatch = useDispatch();

  const pricing = [
    {
      title: "Equinox Plan",
      price: "$2,499",
      listOfItems: [
        "Up to 3 pages",
        "Basic design and layout customization",
        "Contact form integration",
        "Mobile responsive design",
        "Basic on-page SEO optimization",
      ],
      btnURL: "mailto:info@teckiee.com",
    },
    {
      title: "Nimbus Plan",
      price: "$4,999",
      listOfItems: [
        "Up to 7 pages",
        "Customized design and layout",
        "Integration with social media profiles",
        "Google Analytics setup and tracking",
        "Advanced on-page SEO optimization",
      ],
      btnURL: "mailto:info@teckiee.com",
    },
    {
      title: "Odyssey Plan",
      price: "$9,999",
      listOfItems: [
        "Up to 15 pages",
        "Advanced website functionality",
        "Customized website features",
        "Professional content creation",
        "Comprehensive SEO plan & execution",
      ],
      btnURL: "mailto:info@teckiee.com",
    },
  ];
  return (
    <section className="bg-[#1F1F1F]  p-12 md:p-20 w-full">
      <h2 className=" font-[Montserrat] text-slate-100 text-center  text-[10vw] md:text-[5vw] lg:text-[3vw] md:w-[50%] mx-auto font-regular">
        CHOOSE FROM OUR SERVICES PLANS
      </h2>
      <br />
      <div className="flex flex-col md:flex-row gap-[1em]  justify-evenly pt-8  ">
        {pricing.map((item, index) => {
          return (
            <div
              key={index}
              className="shadow-lg shadow-slate-100/70 rounded-xl px-10 py-10 md:py-6 lg:py-10 bg-gradient-to-br rounded-2xl from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)]    "
            >
              <h4 className="font-poppins font-bold text-white text-[7vw]  md:text-[2vw]  2xl:text-[30px]">
                {item.title}
              </h4>
              <div className="w-full">
                <div className="w-12 h-0.5 my-4 bg-purple-500"></div>
              </div>
              <h2 className="font-poppins font-bold text-[8vw] text-[#B286FF] pt-1  md:text-[3.3vw] 2xl:text-[40px]">
                {item.price}
              </h2>
              <div className="font-nunito font-normal text-sm text-white py-2">
                Starting
              </div>
              <ol className="py-">
                {item.listOfItems.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="py-1 font-nunito font-nomral text-white flex justify-start "
                    >
                      <div className="relative w-4 h-auto">
                        <Image src="/check1.svg" alt="check mark" fill />
                      </div>
                      <span className="pl-2 text-[3vw] md:text-[1.3vw] lg:text-[1vw] 2xl:text-[18px]">
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ol>
              <br />
              <div className="w-full flex justify-center ">
                <Link
                  href="mailto:info@teckiee.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    // onClick={() => dispatch(contactModalHandler())}
                    className="bg-gradient-to-tr from-indigo-600 to-purple-500 ... py-2 px-6 round rounded-3xl text-slate-100 text-[2.5vw] md:text-[1.1vw] lg:text-[0.9vw] 2xl:text-[15px]"
                  >
                    Getting Started
                  </button>
                </Link>
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
