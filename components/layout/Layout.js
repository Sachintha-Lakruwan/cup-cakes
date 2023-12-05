import Footer from "../footer/Footer";
import MainNavigation from "../navbar/MainNavigation";
import { Lato } from "next/font/google";
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

function Layout({ children }) {
  return (
    <div
      className={`w-full min-h-screen grid grid-rows-[auto_1fr_auto] ${lato.className}`}
    >
      <MainNavigation />
      <main className="bg-gray-200">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
