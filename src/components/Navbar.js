import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { motion, useCycle } from "framer-motion";

const Path = (props) => (
  <motion.path
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    initial={false}
    {...props}
  />
);

function Navbar() {
  const menu = useSelector((state) => state.menu.topMenu.mainTopMenu);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="relative bg-opacity-80">
      <nav className="fixed top-0 left-0 z-50 w-full flex justify-between h-16 bg-gradient-to-r from-indigo-900 to-slate-900 ...">
        <Link href="/" className="w-1/5 h-auto">
          <div className="relative w-full h-1/2 top-1/4 left-0">
            <Image
              src="/robotHead.svg"
              alt="Robot Head Logo"
              fill
              priority={true}
              className="w-1/2 h-full"
            />
          </div>
        </Link>

        {/* Mobile Menu */}
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "100vh" : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`w-full overflow-hidden ${
            isOpen
              ? "h-full max-h-screen bg-slate-900 bg-opacity-50 backdrop-blur-sm"
              : ""
          } mt-16 absolute z-50 flex justify-start ${
            isOpen ? "flex-col" : "items-center"
          }`}
        >
          {menu.map((item, index) => (
            <motion.li
              key={index}
              className={`font-inter font-normal w-full py-2 z-40 bg-slate-900 bg-opacity-95`}
              initial={{ opacity: 0, y: isOpen ? 0 : -20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
              transition={{
                duration: isOpen ? 0.7 : 0.3,
                delay: isOpen ? index * 0.1 : 0,
              }}
            >
              <Link
                href={item.path}
                className={item.status ? "text-amber-300" : "text-slate-100"}
              >
                {item.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center w-3/5">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`font-inter font-normal w-full py-2 z-40 bg-slate-900 bg-opacity-95 ${
                item.status ? "text-amber-300" : "text-slate-100"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="w-1/5 flex justify-center items-center md:hidden"
          onClick={toggleOpen}
        >
          <svg
            width="23"
            height="23"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
              transition={{ duration: 0.3 }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: {
                  d: "M 2 16.346 L 20 16.346",
                },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
