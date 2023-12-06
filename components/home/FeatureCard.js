import { motion } from "framer-motion";

function FeatureCard({ index }) {
  console.log(index);
  return (
    <motion.div
      initial={{ x: -150, opacity: 0, rotate: "4deg" }}
      animate={{ x: 0, opacity: 1, rotate: 0 }}
      transition={{ delay: index * 0.2, type: "spring", damping: 7 }}
      className="w-full h-full"
    >
      <div className="bg-white rounded-md w-full h-[14dvh] shadow-md transition-all delay-75 duration-300 ease-in-out hover:shadow-xl lg:h-[16dvh]"></div>
    </motion.div>
  );
}

export default FeatureCard;
