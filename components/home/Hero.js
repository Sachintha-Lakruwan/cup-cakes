import Image from "next/image";
import HeroButton from "./HeroButton";
import { Josefin_Sans } from "next/font/google";
import Gradient from "./Gradient";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
});

function Hero() {
  return (
    <div className=" w-full h-[80dvh] relative">
      <Gradient />
      <div className="w-full h-full flex justify-center">
        <div className=" text-gray-200 relative z-10 w-5/6 h-5/6 flex flex-col justify-center gap-[5%] items-center sm:w-3/5 lg:items-start lg:w-3/4">
          <h5 className=" text-xl tracking-wider ">Cake lovers, unite!</h5>
          <h1
            className={`${josefin.className} text-5xl text-center font-semibold tracking-wider leading-relaxed lg:text-left lg:w-1/2`}
          >
            Delicious flavors, tiny prices. Starting at $6!
          </h1>
          <HeroButton />
        </div>
      </div>
      <Image
        src={"/hero.jpg"}
        alt="hero-image"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        priority={true}
      />
    </div>
  );
}

export default Hero;
