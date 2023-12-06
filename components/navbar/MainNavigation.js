import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Logo from "./Logo";

function MainNavigation({ navBar, setNavBar }) {
  return (
    <div className=" h-[8vh] sticky top-0 left-0 z-50 shadow-lg bg-white flex justify-center">
      <div className=" flex justify-between items-center w-5/6 sm:w-3/5 lg:w-3/4">
        <Logo />
        <div className="lg:hidden" onClick={() => setNavBar((prev) => !prev)}>
          <MenuRoundedIcon className=" scale-[1.5]" />
        </div>
        {navBar && (
          <div className=" w-5/6 absolute top-[8dvh] bg-white flex flex-col gap-4 rounded-b-md items-center py-9 text-xl shadow-xl sm:w-3/5 lg:hidden">
            <div>Shop</div>
            <hr className="w-5/6"></hr>
            <div>Categories</div>
            <hr className="w-5/6"></hr>
            <AccountCircleRoundedIcon className="scale-125" />
            <hr className="w-5/6"></hr>

            <ShoppingCartRoundedIcon className="scale-125" />
          </div>
        )}
        <div className="hidden text-lg lg:flex lg:gap-11 tracking-wider">
          <div>Shop</div>
          <div>Categories</div>
        </div>
        <div className="hidden lg:flex gap-11">
          <AccountCircleRoundedIcon className="scale-125" />
          <ShoppingCartRoundedIcon className="scale-125" />
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;
