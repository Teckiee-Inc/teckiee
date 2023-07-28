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
        <header
          className="h-[40vw]"
          style={{
            backgroundImage: "url(/Landing_page.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="flex items-center flex-col justify-center h-full">
            <h1 className="text-center text-slate-100 font-[Montserrat]  leading-[1em] font-bold text-[10vw] xl:text-[8em]">
              About <br /> Teckiee
            </h1>
            <p className="w-[50%] text-[0.7em] md:text-[3vw] xl:text-[1.4em] text-center font-[Montserrat]  text-slate-100">
              <br />
              We are committed to driving business Growth
            </p>
          </div>
        </header>
        <AboutInfo />
      </div>
    </>
  );
}
export default About;
