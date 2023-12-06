import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Logo from "./Logo";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

function MainNavigation({ navBar, setNavBar }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const bacground = useTransform(
    scrollYProgress,
    [0, 1],
    ["#4ade80", "#facc15"]
  );
  return (
    <div className=" h-[8vh] sticky top-0 left-0 z-50 shadow-lg bg-white flex justify-center overflow-hidden">
      <motion.div
        style={{
          scaleX: scaleX,
          transformOrigin: "left",
          background: bacground,
        }}
        className=" w-full h-1 absolute bottom-0"
      ></motion.div>
      <div className=" flex justify-between items-center w-5/6 sm:w-3/5 lg:w-3/4">
        <Logo />
        <div className="lg:hidden" onClick={() => setNavBar((prev) => !prev)}>
          <MenuRoundedIcon
            className={`scale-[1.5] ${
              navBar && "rotate-180"
            } transition-all ease-in-out duration-300`}
          />
        </div>
        <AnimatePresence>
          {navBar && (
            <motion.div
              className=" w-5/6 absolute top-[9vh] bg-white flex flex-col gap-4 rounded-md items-center py-9 text-xl shadow-xl sm:w-3/5 lg:hidden"
              initial={{ opacity: 0, y: -150 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -150 }}
            >
              <div>Shop</div>
              <hr className="w-5/6"></hr>
              <div>Categories</div>
              <hr className="w-5/6"></hr>
              <PersonOutlineRoundedIcon className="scale-125" />
              <hr className="w-5/6"></hr>

              <ShoppingCartOutlinedIcon className="scale-125" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="hidden text-lg lg:flex lg:gap-11 tracking-wider">
          <div>Shop</div>
          <div>Categories</div>
        </div>
        <div className="hidden lg:flex gap-11">
          <PersonOutlineRoundedIcon className="scale-125" />
          <ShoppingCartOutlinedIcon className="scale-125" />
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;
