import Image from "next/image";

function DesignAndMarketing() {
  return (
    <div className="flex flex-col items-center pb-24 ">
      <section className="flex justify-evenly w-11/12">
        <div className="w-full px-6">
          <h2 className="font-poppins font-bold text-2xl text-slate-900">
            Captivating Design <br />
            That Exceed Expectations
          </h2>
          <p className="text-slate-900 py-4 font-nunito font-light">
            At Teckiee, we pride ourselves on delivering exceptional web design
            services that exceed our clients&apos; expectations. Our team of
            skilled professionals is committed to creating stunning and
            user-friendly websites tailored to your unique business needs.Trust
            us to bring your vision to life with stunning designs that make an
            impact.
          </p>

          <button className="bg-gradient-to-r from-violet-700 to-violet-400 text-slate-100 w-2/4 py-2 rounded-3xl font-poppins font-bold text-md">
            Get Quote
          </button>
        </div>
      </section>
    </div>
  );
}

export default DesignAndMarketing;
