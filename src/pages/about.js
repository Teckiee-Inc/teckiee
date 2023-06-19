import Head from "next/head";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateMenu } from "@/redux/ducks/menu";
import AboutInfo from "@/components/aboutUs/AboutInfo";

function About() {
  const dispatch = useDispatch();
  const pageCheck = useRef(false);
  useEffect(() => {
    if (pageCheck.current) {
      dispatch(
        updateMenu([
          { path: "/", title: "HOME", status: false },
          { path: "/portfolio", title: "PORTFOLIO", status: false },
          { path: "/our_services", title: "OUR SERVICES", status: false },
          { path: "/about", title: "ABOUT US", status: true },
          { path: "/contact_us", title: "CONTACT US", status: false },
        ])
      );
    }
    return () => {
      pageCheck.current = true;
    };
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>Teckiee | About Us</title>
      </Head>
      <div className="pt-16">
        <header>
          <h1 className="text-center text-slate-100 font-inter font-bold text-3xl">
            About Teckiee
          </h1>
          <p className="text-center text-slate-100">
            We are committed to driving business Growth
          </p>
        </header>
        <AboutInfo />
      </div>
    </>
  );
}
export default About;
