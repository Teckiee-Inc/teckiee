import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  contactModalHandler,
  nameInputHandler,
  emailInputHandler,
  projectInputHandler,
  cleanUpHandler,
  modalInfo,
} from "@/redux/ducks/modals";
function ContactUsModal() {
  const dispatch = useDispatch();
  const nameData = useSelector(state => state.modal.contactUsModal.nameInput);
  const emailData = useSelector(state => state.modal.contactUsModal.emailInput);
  const projectData = useSelector(
    state => state.modal.contactUsModal.projectInput
  );
  const modalInputData = useSelector(state => state.contactUsModal);
  // console.log(nameData);
  function msgHandler() {
    dispatch(modalInfo(modalInputData));
    dispatch(cleanUpHandler());
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 bg-slate-900 bg-opacity-90">
      <section className="w-full h-full z-50 opacity-100 bg-slate-100 rounded-2xl pt-20">
        <button onClick={() => dispatch(contactModalHandler())}>exit</button>
        <div className="relative max-h-64 min-h-0 h-1/2 w-full flex justify-center">
          <Image
            src="/modalImagev3.jpg"
            alt="contact us modal message"
            fill
            className=""
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex flex-col items-center"
        >
          <h2 className="font-inter font-semibold text-2xl mt-4">
            Hello. We&apos;ve been expecting you
          </h2>
          <p className="font-inter font-normal text-sm mb-2">
            let us know how we can help
          </p>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            className="font-inter font-normal text-sm w-11/12 p-2 rounded-md outline-none"
            placeholder="Your Name"
            value={nameData}
            onChange={e => dispatch(nameInputHandler(e.target.value))}
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            className="font-inter font-normal my-2 text-sm w-11/12 p-2 rounded-md outline-none"
            placeholder="Your Email"
            value={emailData}
            onChange={e => dispatch(emailInputHandler(e.target.value))}
          />
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            className="font-inter font-normal text-sm w-11/12 p-2 rounded-md outline-none"
            placeholder="Tell Us About Your Project"
            value={projectData}
            onChange={e => dispatch(projectInputHandler(e.target.value))}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="font-inter font-semibold mt-4 bg-slate-300 w-1/2 rounded-md py-2 bg-gradient-to-r from-slate-200 to-slate-400 ... text-slate-700"
            onClick={() => msgHandler()}
          >
            Send Message
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
export default ContactUsModal;
