import Image from "next/image";
import Gradient from "./Gradient";

function Poster() {
  return (
    <div className=" my-20 bg-white w-full py-10 flex justify-center">
      <div className=" flex justify-center w-5/6 sm:w-3/5 lg:w-3/4 md:gap-[2%]">
        <div className="hidden w-[49%] aspect-[4/5] bg-gray-900 lg:inline-block"></div>
        <div className="w-full relative aspect-[4/5] lg:w-[49%]">
          <Image
            src={"/customised_cake.jpg"}
            alt={"customised cake"}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <Gradient custom={"lg:hidden"}></Gradient>
        </div>
      </div>
    </div>
  );
}

export default Poster;
