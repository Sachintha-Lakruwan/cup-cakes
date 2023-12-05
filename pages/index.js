import Feaures from "@/components/home/Features";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-full flex justify-center pb-[10dvh]">
        <div className=" flex flex-col items-center  w-5/6 sm:w-3/5 lg:w-3/4">
          <Feaures />
        </div>
      </div>
    </div>
  );
}
