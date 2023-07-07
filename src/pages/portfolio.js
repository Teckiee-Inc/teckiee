import Head from "next/head";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateMenu } from "@/redux/ducks/menu";

function Portfolio() {
  const dispatch = useDispatch();
  const pageCheck = useRef(false);
  useEffect(() => {
    if (pageCheck.current) {
      dispatch(
        updateMenu([
          { path: "/", title: "HOME", status: false },
          { path: "/portfolio", title: "PORTFOLIO", status: true },
          { path: "/our_services", title: "OUR SERVICES", status: false },
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
        <title>Teckiee | Portfolio</title>
      </Head>
      <div className="pt-14">This is the Portfolio Page</div>
    </>
  );
}
export default Portfolio;
