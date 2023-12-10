import Feaures from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Poster from "@/components/home/Poster";
import TrendingHeading from "@/components/home/TrendingHeading";
import ItemGrid from "@/components/product-cards/ItemGrid";
import { cupCakeData } from "@/public/cup-cake-data";
import { cakeData } from "@/public/cake-data";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-full flex pb-[10vh] flex-col items-center">
        <div className=" flex flex-col items-center  w-5/6 sm:w-3/5 lg:w-3/4">
          <Feaures />
          <TrendingHeading category={"Cup-Cakes"} link={"cup-cakes"} />
          <ItemGrid products={cupCakeData} />
        </div>
        <Poster />
        <div className=" flex flex-col items-center  w-5/6 sm:w-3/5 lg:w-3/4">
          <TrendingHeading category={"Cakes"} link={"cakes"} />
          <ItemGrid products={cakeData} />
        </div>
      </div>
    </div>
  );
}
