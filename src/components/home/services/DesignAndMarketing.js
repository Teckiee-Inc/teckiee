import Image from "next/image";

function DesignAndMarketing() {
  return (
    <div className="flex flex-col items-center pb-24 ">
      <section className="flex flex-col md:flex-row justify-evenly w-11/12 min-h-[300px] md:h-[50vw] md:max-h-[700px] py-10  md:py-20">
        <div className=" w-full h-[50vw] md:h-[40vw] xl:h-[30vw] md:w-1/2 md:h-100%   relative bg-transparent rounded-3xl ">
          <Image
            src={"/design_1.jpg"}
            alt="Teckiee Logo"
            fill
            unoptimized
            priority={true}
            className="rounded-lg   object-contain "
          />
        </div>

        <div className="w-full px-6 text-center md:text-left  md:w-1/2">
          <h2 className=" font-bold  text-2xl md:text-[3vw] leading-[1em]  2xl:text-[50px] text-slate-900">
            Captivating Designs <br />
            That Exceed Expectations
          </h2>
          <p className="text-slate-900 py-4 font-nunito font-light md:text-[1vw] md:w-[40%]">
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
