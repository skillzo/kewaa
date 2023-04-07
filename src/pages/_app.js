import HomeLayout from "@/components/layouts/HomeLayout";
import Footer from "@/components/navigations/Footer";
import Navbar from "@/components/navigations/Navbar";
import { UserProvider } from "@/store/context";
import "@/styles/globals.css";
import { IconContext } from "react-icons";

export default function App({ Component, pageProps }) {
  return (
    <IconContext.Provider value={{ size: "25" }}>
      <UserProvider>
        <Navbar />
        <HomeLayout>
          <Component {...pageProps} />
          <Footer />
        </HomeLayout>
      </UserProvider>
    </IconContext.Provider>
  );
}
