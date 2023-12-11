import Link from "next/link";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
});

function Logo() {
  return (
    <div className={`text-xl ${poppins.className}`}>
      <Link href={"/"}>Cake Craft</Link>
    </div>
  );
}

export default Logo;
