import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
});

function Logo() {
  return <div className={`text-xl ${poppins.className}`}>CakeCraft</div>;
}

export default Logo;
