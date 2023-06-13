import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import DesignAndMarketing from "./services/DesignAndMarketing";
import Networking from "./services/Networking";
import WebDevelopment from "./services/WebDevelopment";

function Pricing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const components = [
    { key: "Web", component: <WebDevelopment /> },
    { key: "Network", component: <Networking /> },
    { key: "Design", component: <DesignAndMarketing /> },
  ];

  const containerRef = useRef(null);

  const handleScroll = () => {
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const newIndex = Math.round(container.scrollLeft / containerWidth);
    setActiveIndex(newIndex);
  };

  const handleClick = (index) => {
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    container.scrollTo({
      left: index * containerWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-zinc-50">
      <h2 className="bg-gradient-to-r from-violet-700 to-violet-400 text-slate-100 text-center p-12 mb-12 font-inter font-extrabold text-2xl">
        LET&apos;S BUILD YOUR TOMORROW, TODAY!
      </h2>
      <div className="flex justify-evenly pb-6">
        {components.map((component, index) => (
          <button
            key={component.key}
            className={`text-poppins font-bold text-lg ${
              activeIndex === index ? "text-violet-500" : "text-slate-400"
            }`}
            onClick={() => handleClick(index)}
          >
            {component.key}
          </button>
        ))}
      </div>
      <div className="pt-12">
        <div className="overflow-x-auto" ref={containerRef}>
          <motion.div
            className="flex"
            style={{ scrollSnapType: "x mandatory" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {components.map((component, index) => (
              <div key={component.key} className="min-w-full min-h-full">
                {component.component}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
