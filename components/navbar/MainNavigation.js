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
import LoginPopUp from "../home/LoginPopUp";
import { usePopUp } from "../layout/Layout";
import Link from "next/link";
import { useSession } from "next-auth/react";

function MainNavigation({ navBar, setNavBar }) {
  const { data: session } = useSession();
  const { showLogin, setLogin } = usePopUp();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const bacground = useTransform(
    scrollYProgress,
    [0, 1],
    ["#4ade80", "#facc15"]
  );
  return (
    <div className="sticky top-0 left-0 z-50 h-[8vh] overflow-visible">
      <div className=" h-[8vh] shadow-lg bg-white flex justify-center">
        <div className=" w-full h-[0.5vh] absolute top-[7.5vh] overflow-hidden">
          <motion.div
            style={{
              scaleX: scaleX,
              background: bacground,
              transformOrigin: "left",
            }}
            className="w-full h-full"
          />
        </div>
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
                <NavLinks />
                <hr className="w-5/6"></hr>
                <PersonOutlineRoundedIcon className="scale-125" />
                <hr className="w-5/6"></hr>
                <Link href={"/cart"}>
                  <ShoppingCartOutlinedIcon className="scale-125" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="hidden text-lg lg:flex lg:gap-11 tracking-wider">
            <div>
              <Link href={"/shop"}>Shop</Link>
            </div>

            <div>
              <Link href={"/custom-cake"}>Custom Cake</Link>
            </div>
          </div>
          <div className="hidden lg:flex gap-11">
            <Profile session={session} />
            <div className="flex items-center">
              <Link href={"/cart"}>
                <ShoppingCartOutlinedIcon className="scale-125" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>{showLogin && <LoginPopUp />}</AnimatePresence>
    </div>
  );
}

export default MainNavigation;

function NavLinks() {
  return (
    <>
      <div>
        <Link href={"/shop"}>Shop</Link>
      </div>
      <hr className="w-5/6"></hr>

      <div>
        <Link href={"/custom-cake"}>Custom Cake</Link>
      </div>
    </>
  );
}

function Profile({ session }) {
  const { showLogin, setLogin } = usePopUp();

  if (session)
    return (
      <Link href={"/profile"} className="flex gap-2">
        <div className="flex items-center">
          <PersonOutlineRoundedIcon className="scale-125" />
        </div>
        <div className=" text-gray-500">
          <p className=" text-xs font-light">Hello,</p>
          <p className=" text-xs font-light">John</p>
        </div>
      </Link>
    );

  return (
    <div onClick={() => setLogin(true)} className="flex gap-2 cursor-pointer">
      <div className=" text-blue-500">
        <p className=" text-xs font-light">Login or</p>
        <p className=" text-xs font-light">Signup</p>
      </div>
    </div>
  );
}
