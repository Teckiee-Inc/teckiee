import "@/tailwind/output.css";
import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import store from "@/redux/configureStore";
import { AnimatePresence, motion } from "framer-motion";

function App({ Component, pageProps }) {
  const router = useRouter();

  // Get the screen width
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 640; // Set a default width for server-side rendering

  return (
    <Provider store={store}>
      <AnimatePresence mode="wait">
        <div className="bg-indigo-950">
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration:
                screenWidth <= 640
                  ? 0.7
                  : screenWidth > 641 && screenWidth <= 1000
                  ? 0.5
                  : 0.4, // Set different durations based on the screen size
            }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: "inset(0% 100% 0% 0%)",
              },
              animateState: {
                opacity: 1,
                clipPath: "inset(0% 0% 0% 0%)",
              },
              exitState: {
                clipPath: "inset(0% 0% 0% 100%)",
              },
            }}
            className="w-full bg-black"
          >
            <div className="bg-indigo-950">
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </Provider>
  );
}

export default App;
