import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

function Footer() {
  const menuLinks = useSelector(state => state.menu.footerMenu);
  return (
    <footer className="font-montserrat bg-indigo-950 text-slate-100 pt-12">
      <div className="flex flex-col items-center">
        <h2 className=" font-bold text-[5vw] xl:text-[3vw] 2xl:text-[60px]">
          Got a Project?
        </h2>
        <p className=" font-medium text-xs pt-2 text-[2vw] xl:text-[1.5vw] 2xl:text-[30px]">
          Let&apos;s Talk
        </p>
        <br />
        <Link
          href="mailto:info@teckiee.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-purple-700 rounded-3xl py-2 px-8 text-slate-100 font-inter font-semibold text-xs mt-4">
            Tell Us Everything
          </button>
        </Link>
      </div>
      <div className="text-center md:text-left flex flex-col  md:justify-evenly md:flex-row items-center md:items-start gap-[4vw] py-10 pt-5 md:pt-20  md:mx-auto md:w-[70%]">
        <div className="hidden md:flex   ">
          <img src="/footer_teckie.svg " className="self-start " />
        </div>

        <div className=" ">
          <h3>Services</h3>

          <ul className="text-slate-400">
            {menuLinks.services.map((item, index) => {
              return (
                <li key={index} className="py-0.5">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="">
          <h3>About Us</h3>

          <ul className="text-slate-400 ">
            {menuLinks.aboutUs.map((item, index) => {
              return (
                <li key={index} className="py-0.5">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="">
          <h3 className="">Contact Us</h3>

          <ul className="text-slate-400">
            {menuLinks.contact.map((item, index) => {
              return (
                <li key={index} className="py-0.5">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="flex flex-col items-center">
          <h3 className="w-4/5">Social</h3>
          <ul className="flex items-center w-4/5 ">
            {menuLinks.socialMedia.map((item, index) => {
              return (
                <li key={index} className="px-1 lg:pr-2 lg:pl-0">
                  <Link
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={item.imgURL}
                      alt={item.alt}
                      width="35"
                      height="35"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="text-slate-100 py-6 text-center font-inter font-medium flex justify-center">
        <p className="border-t-2 border-t-slate-600 pt-4 w-11/12 text-xs font-inter">
          © 2023 Teckiee | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
export default Footer;
