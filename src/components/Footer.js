import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

function Footer() {
  const menuLinks = useSelector(state => state.menu.footerMenu);
  return (
    <footer className="bg-indigo-950 text-slate-100 pt-12">
      <div className="flex flex-col items-center">
        <h2 className="font-inter font-bold text-xl">Got a Project?</h2>
        <p className="font-inter font-medium text-xs pt-2">Let&apos;s Talk</p>
        <button className="bg-purple-700 rounded-3xl py-2 px-8 text-slate-100 font-inter font-semibold text-xs mt-4">
          Tell Us Everything
        </button>
      </div>
      <div className="flex justify-center pt-20 ">
        <div className="w-2/5">
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
        <div className="w-2/5">
          <div>
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
          <div>
            <h3 className="pt-2">Contact Us</h3>
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
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="w-4/5">Social</h3>
        <ul className="flex w-4/5">
          {menuLinks.socialMedia.map((item, index) => {
            return (
              <li key={index} className="">
                <Link href={item.path}>
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
      <div className="text-slate-100 py-6 text-center font-inter font-medium flex justify-center">
        <p className="border-t-2 border-t-slate-600 pt-4 w-11/12 text-xs font-inter">
          © 2023 Teckiee | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
export default Footer;
