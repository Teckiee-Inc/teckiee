import Image from "next/image";

function WebDevelopment() {
  return (
    <div className="flex flex-col items-center pb-24 ">
      <section className="flex justify-evenly w-11/12">
        <div className="w-full px-6">
          <h2 className="font-poppins font-bold text-2xl">
            Professional Service <br />
            at Affordable Price
          </h2>
          <p className="text-slate-400 py-2 font-nunito font-light">
            Our team is committed to high-quality digital solutions at a
            competitive price. Whether you&apos;re looking to revamp your
            website, improve your online presence, or build a strong brand,
            we&apos;re here to provide you with the professional services you
            need to succeed online.
          </p>

          <button className="bg-gradient-to-r from-violet-700 to-violet-400 text-slate-100 w-2/4 py-2 rounded-3xl font-poppins font-bold text-md">
            Get Quote
          </button>
        </div>
      </section>
    </div>
  );
}

export default WebDevelopment;
