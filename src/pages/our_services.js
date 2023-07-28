import WebServices from "@/components/ourServices/WebServices";
import Head from "next/head";
import Pricing from "@/components/home/Pricing";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateMenu } from "@/redux/ducks/menu";
import Services_Summary from "@/components/ourServices/Services_Summary";

function OurServices() {
  const dispatch = useDispatch();
  const pageCheck = useRef(false);
  useEffect(() => {
    if (pageCheck.current) {
      dispatch(
        updateMenu([
          { path: "/", title: "HOME", status: false },
          { path: "/portfolio", title: "PORTFOLIO", status: false },
          { path: "/our_services", title: "OUR SERVICES", status: true },
          { path: "/about", title: "ABOUT US", status: false },
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
        <title>Teckiee | Our Services</title>
      </Head>
      <div className="pt-14">
        <Services_Summary />
        <WebServices />
        <Pricing />
      </div>
    </>
  );
}
export default OurServices;
