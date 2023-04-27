import Image from "next/image";

function Networking() {
  const list = [
    "Reliable Uptime",
    "Advanced Security",
    "Scalable Infrastructure",
    "Efficient Performance",
    "Customized Solutions",
    "Expert Support",
  ];

  return (
    <div className="flex flex-col items-center pb-24">
      <section className="flex justify-evenly w-11/12">
        {" "}
        <div className="w-3/5 px-6">
          {/* top side */}
          <div className="flex justify-evenly ">
            <div className="w-1/2   p-6 rounded-t-lg rounded-bl-lg">
              <div className="relative h-16 w-16">
                <Image src="/seo.svg" alt="web design logo" fill className="" />
              </div>
              <h4 className="py-2 font-poppins font-bold text-2xl">
                Trusted Reliability
              </h4>
              <p className="font-nunito font-normal">
                Committed to dependable and trustworthy networking solutions for
                our customers.
              </p>
            </div>
            <div className="bg-gradient-to-tr from-purple-500 to-indigo-600 ... text-slate-100 p-6 w-1/2 rounded-r-lg rounded-t-lg">
              <div className="relative h-16 w-16">
                <Image
                  src="/custom.svg"
                  alt="web design logo"
                  fill
                  className=""
                />
              </div>
              <h4 className="py-2 font-poppins font-bold text-2xl">
                Robust Security
              </h4>
              <p className="font-nunito font-normal">
                Ensuring the utmost security for your peace of mind.
              </p>
            </div>
          </div>
          {/* bottom side */}
          <div className="flex justify-evenly">
            <div className=" p-6 w-1/2 bg-gradient-to-tr from-indigo-600 to-purple-500 ... text-slate-100 rounded-b-lg rounded-l-lg">
              <div className="relative h-16 w-16">
                <Image
                  src="/test.svg"
                  alt="web design logo"
                  fill
                  className=""
                />
              </div>
              <h4 className="py-2 font-poppins font-bold text-2xl">
                Limitless Scalability
              </h4>
              <p className="font-nunito font-normal">
                Unleash the potential of your business with limitless
                scalability.
              </p>
            </div>
            <div className="  p-6 rounded-r-lg rounded-bl-lg w-1/2">
              <div className="relative h-16 w-16">
                <Image
                  src="/eCommerce.svg"
                  alt="web design logo"
                  fill
                  className=""
                />
              </div>
              <h4 className="py-2 font-poppins font-bold text-2xl">
                Stellar Performance
              </h4>
              <p className="font-nunito font-normal">
                Unmatched speed and efficiency with every interaction.
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/5 px-6">
          <p className="text-slate-400 py-2 font-montserrat font-medium">
            OUR SERVICES
          </p>
          <h2 className="font-poppins font-bold text-4xl">
            Revolutionizing
            <br /> Networking Solutions
          </h2>
          <p className="text-slate-400 py-2 font-nunito font-light">
            Our networking solutions are tailored to meet your needs, providing
            top-notch performance and security to keep your business running
            smoothly. With years of experience, our team is dedicated to
            providing reliable and scalable solutions that you can trust. Let us
            help you transform your business today.
          </p>
          {/* <p className="text-slate-400 py-2 font-nunito font-light">
            With personalized digital solutions tailored to your unique needs,
            we work closely with you to understand your goals, challenges, and
            vision, ensuring top-notch service and support every step of the
            way.
          </p> */}
          <ol className="flex justify-between flex-wrap py-6 w-full">
            {list.map((item, index) => {
              return (
                <li
                  className="w-1/2 py-2 text-sm flex items-center"
                  key={index}
                >
                  <span className="relative h-4 w-4">
                    <Image src="/shape.svg" alt="testing" fill />
                  </span>

                  <span className="pl-1 font-nunito font-light">{item}</span>
                </li>
              );
            })}
          </ol>
          <button className="bg-gradient-to-r from-violet-700 to-violet-400 ... text-slate-100 w-3/4 py-2 rounded-3xl font-poppins font-bold text-2xl">
            Get a free Quote
          </button>
        </div>
      </section>
    </div>
  );
}

export default Networking;
