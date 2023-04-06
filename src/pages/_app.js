import HomeLayout from "@/components/layouts/HomeLayout";
import Footer from "@/components/navigations/Footer";
import Navbar from "@/components/navigations/Navbar";
import "@/styles/globals.css";
import { IconContext } from "react-icons";

export default function App({ Component, pageProps }) {
  return (
    <IconContext.Provider value={{ size: "25" }}>
      <Navbar />
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
      <Footer />
    </IconContext.Provider>
  );
}
