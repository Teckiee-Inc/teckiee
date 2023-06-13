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
    <div className="flex flex-col items-center pb-24 ">
      <section className="flex justify-evenly w-11/12">
        <div className="w-full px-6">
          <h2 className="font-poppins font-bold text-2xl">
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

          <button className="bg-gradient-to-r from-violet-700 to-violet-400 text-slate-100 w-2/4 py-2 rounded-3xl font-poppins font-bold text-md">
            Get Quote
          </button>
        </div>
      </section>
    </div>
  );
}

export default Networking;
