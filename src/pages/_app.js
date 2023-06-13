import "@/tailwind/output.css";
import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import store from "@/redux/configureStore";
import { AnimatePresence, motion } from "framer-motion";

function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <div className="bg-indigo-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 1.09,
              // delay: 0.5,
            }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: "circle(0% at 50% 50%)",
              },
              animateState: {
                opacity: 1,
                clipPath: `circle(1000% at 50% 50%)`,
              },
              exitState: {
                clipPath: "circle(0% at 50% 50%)",
              },
            }}
            className="w-full h-screen bg-black"
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </motion.div>
        </AnimatePresence>
      </div>
    </Provider>
  );
}

export default App;
