import Image from "next/image";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function SingleItem({ product }) {
  const router = useRouter();
  function addToCart(e) {
    console.log("added to cart");
    e.stopPropagation();
  }
  function viewItem() {
    console.log("view item");
    router.push(`/products/${product.id}`);
  }
  return (
    <div
      onClick={viewItem}
      className=" select-none cursor-pointer w-full  aspect-[3/4] bg-gray-900 transition delay-75 duration-300 ease-in-out max-w-[400px]"
    >
      <div className="w-full  h-full relative overflow-hidden">
        <Image
          src={`/${product.img}`}
          alt={product.id}
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
        <div className="h-full">
          <motion.button
            onClick={addToCart}
            className=" w-1/6 aspect-square absolute right-5 top-5 rounded-full flex justify-center items-center bg-white shadow-lg overflow-hidden text-gray-800"
            whileTap={{
              scale: 0.8,
              color: "#fff",
              backgroundColor: "#22c55e",
            }}
            whileHover={{ scale: 1.2 }}
          >
            <AddShoppingCartRoundedIcon className=" scale-150 lg:scale-100 " />
          </motion.button>

          <div className="relative top-2/3 z-10 h-1/3 flex flex-col justify-end px-7 py-4 bg-gradient-to-t from-gray-900 text-gray-200 lg:px-3 lg:py-2">
            <div className=" font-bold ">{product.price}</div>
            <div className=" text-xl font-bold lg:text-lg">{product.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
