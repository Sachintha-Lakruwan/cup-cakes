import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
});
import Link from "next/link";

function TrendingHeading({ category, link }) {
  return (
    <div className="justify-center w-full flex md:justify-between">
      <Link href={"./categories/cup-cakes"}>
        <h3 className={`${poppins.className}  text-4xl text-gray-800 mb-11`}>
          Trending {category} 🔥
        </h3>
      </Link>
      <Link href={`./categories/${link}`}>
        <div
          className={`${poppins.className} text-4xl text-gray-800 mb-11 hidden md:inline-block`}
        >
          See All
        </div>
      </Link>
    </div>
  );
}

export default TrendingHeading;
