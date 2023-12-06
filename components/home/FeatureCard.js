import { motion } from "framer-motion";
import FeaturedIcons from "./FeaturedIcons";

function FeatureCard({ index, post }) {
  return (
    <motion.div
      initial={{ x: -150, opacity: 0, rotate: "4deg" }}
      animate={{ x: 0, opacity: 1, rotate: 0 }}
      transition={{ delay: index * 0.2, type: "spring", damping: 7 }}
      className="w-full h-full"
    >
      <div className="bg-white rounded-md w-full h-[14vh] shadow-md transition-all delay-75 duration-300 ease-in-out hover:shadow-xl lg:h-[16vh] grid grid-cols-[1fr_3fr] grid-rows-1 pr-5">
        <div className=" row-span-2 flex justify-center items-center scale-[1.8] text-teal-700">
          <FeaturedIcons type={index} />
        </div>
        <div className=" h-full flex flex-col justify-center gap-[1vh]">
          <h3 className=" text-xl text-gray-700 font-bold">{post.title}</h3>
          <h5 className=" text-sm font-light text-gray-500 ">{post.text}</h5>
        </div>
      </div>
    </motion.div>
  );
}

export default FeatureCard;
