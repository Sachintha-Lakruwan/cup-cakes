import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
});
import Link from "next/link";

function TrendingHeading({ category, link }) {
  return (
    <div className="justify-center w-full flex md:justify-between">
      <Link href={"./categories/cup-cakes"}>
        <h3
          className={`${josefin.className}  text-4xl text-gray-800 mb-11 font-semibold`}
        >
          Trending {category} 🔥
        </h3>
      </Link>
      <Link href={`./categories/${link}`}>
        <div
          className={`${josefin.className} text-4xl text-gray-800 mb-11 font-semibold hidden md:inline-block`}
        >
          See All
        </div>
      </Link>
    </div>
  );
}

export default TrendingHeading;
