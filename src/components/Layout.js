import { useSelector } from "react-redux";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ContactUsModal from "./contactUs/ContactUsModal";

function Layout({ children }) {
  const contactUsToggle = useSelector(
    state => state.modal.contactUsModal.active
  );
  return (
    <div>
      <Navbar />
      {children}
      {contactUsToggle && <ContactUsModal />}
      <Footer />
    </div>
  );
}

export default Layout;
