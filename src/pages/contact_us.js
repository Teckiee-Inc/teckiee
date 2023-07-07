import Head from "next/head";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateMenu } from "@/redux/ducks/menu";
import EmployeeCards from "@/components/businessCards/EmployeeCards";

function ContactUs() {
  const dispatch = useDispatch();
  const pageCheck = useRef(false);
  useEffect(() => {
    if (pageCheck.current) {
      dispatch(
        updateMenu([
          { path: "/", title: "HOME", status: false },
          { path: "/portfolio", title: "PORTFOLIO", status: false },
          { path: "/our_services", title: "OUR SERVICES", status: false },
          { path: "/about", title: "ABOUT US", status: false },
          { path: "/contact_us", title: "CONTACT US", status: true },
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
        <title>Teckiee | Contact Us</title>
      </Head>
      <div className="lg:pt-14">
        <EmployeeCards />
      </div>
    </>
  );
}
export default ContactUs;
