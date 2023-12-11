import Image from "next/image";
import Gradient from "./Gradient";
import Link from "next/link";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
});

function Poster() {
  return (
    <div className=" my-20 bg-white w-full py-10 flex justify-center">
      <div className=" flex justify-center w-5/6 sm:w-3/5 lg:w-3/4 md:gap-[2%]">
        <div className="hidden w-[49%] aspect-[4/5] gradient lg:inline-block">
          <Text />
        </div>
        <div className="w-full relative aspect-[3/4] lg:aspect-[4/5] lg:w-[49%]">
          <Image
            src={"/customised_cake.jpg"}
            alt={"customised cake"}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <Gradient custom={"lg:hidden"}>
            <Text />
          </Gradient>
        </div>
      </div>
    </div>
  );
}

export default Poster;

function Text() {
  return (
    <div className="w-full h-full text-white p-[10%]  flex flex-col justify-evenly items-center">
      <h2 className={`${poppins.className} text-5xl text-center`}>
        Order your custom cake now!
      </h2>
      <div className=" py-4 px-7 rounded-full text-xl bg-white text-gray-900 font-bold transition delay-75 duration-300 ease-in-out hover:bg-gray-200  hover:scale-110 md:text-cyan-500 md:hover:text-cyan-700">
        <Link href={"/custom-cake"}>Order Now</Link>
      </div>
    </div>
  );
}
