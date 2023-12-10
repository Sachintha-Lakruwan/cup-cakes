import { useState } from "react";
import Footer from "../footer/Footer";
import MainNavigation from "../navbar/MainNavigation";
import Snowfall from "react-snowfall";
import { Lato } from "next/font/google";
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

function Layout({ children }) {
  const [navBar, setNavBar] = useState(false);
  return (
    <div
      className={`w-full min-h-screen grid grid-rows-[auto_1fr_auto] ${lato.className} relative`}
    >
      <Snowfall style={{ zIndex: 55 }} snowflakeCount={300} />
      <MainNavigation navBar={navBar} setNavBar={setNavBar} />
      <main className="bg-gray-200" onClick={() => setNavBar(false)}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
