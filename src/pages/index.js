import Head from "next/head";
import { Inter } from "next/font/google";
import Pricing from "@/components/home/Pricing";
import Quote from "@/components/home/Quote";
import HeroLanding from "@/components/home/HeroLanding";
import BusinessPartners from "@/components/home/BusinessPartners";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateMenu } from "@/redux/ducks/menu";
import Info from "@/components/home/services/Info";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const pageCheck = useRef(false);
  useEffect(() => {
    if (pageCheck.current) {
      dispatch(
        updateMenu([
          { path: "/", title: "HOME", status: true },
          // { path: "/portfolio", title: "PORTFOLIO", status: false },
          { path: "/our_services", title: "OUR SERVICES", status: false },
          { path: "/about", title: "ABOUT US", status: false },
          // { path: "/contact_us", title: "CONTACT US", status: false },
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
        <title>Teckiee | Home</title>
        <meta name="description" content="Teckiee LLC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full font-montserrat">
        <HeroLanding />
        <Quote />
        {/* testing */}
        <Pricing />
        <Info />
        {/* <BusinessPartners /> */}
      </main>
    </>
  );
}
