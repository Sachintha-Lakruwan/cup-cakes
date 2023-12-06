import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
});

function Logo() {
  return <div className={`text-2xl ${josefin.className}`}>CakeCraft</div>;
}

export default Logo;
