import Footer from "../footer/Footer";
import MainNavigation from "../navbar/MainNavigation";
import Snowfall from "react-snowfall";
import { createContext, useContext, useState } from "react";
import { Varela_Round } from "next/font/google";
const varela = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
});

const PopUpWindow = createContext();

function Layout({ children }) {
  const [navBar, setNavBar] = useState(false);
  const [showLogin, setLogin] = useState(false);
  return (
    <PopUpWindow.Provider value={{ showLogin, setLogin }}>
      <div
        className={`w-full min-h-screen grid grid-rows-[auto_1fr_auto] ${varela.className} relative`}
      >
        <Snowfall style={{ zIndex: 55 }} snowflakeCount={150} />
        <MainNavigation navBar={navBar} setNavBar={setNavBar} />
        <main className="bg-gray-200" onClick={() => setNavBar(false)}>
          {children}
        </main>
        <Footer />
      </div>
    </PopUpWindow.Provider>
  );
}

export default Layout;

export function usePopUp() {
  const context = useContext(PopUpWindow);
  if (!context) throw Error("Context is not accessible here");
  return context;
}
