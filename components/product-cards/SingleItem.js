import Image from "next/image";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { useRouter } from "next/router";

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
      className=" cursor-pointer w-full  aspect-[3/4] bg-white transition delay-75 duration-300 ease-in-out shadow-lg hover:shadow-2xl "
    >
      <div className="w-full  h-full relative overflow-hidden">
        <Image
          src={"/cup-cake1.jpg"}
          alt={product.id}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="transition delay-75 duration-300 ease-in-out hover:scale-[1.15]"
        />
        <div className="h-full">
          <button
            onClick={addToCart}
            className=" w-1/6 aspect-square absolute right-5 top-5 rounded-full flex justify-center items-center bg-white shadow-lg overflow-hidden"
          >
            <AddShoppingCartRoundedIcon className=" scale-150 lg:scale-100" />
          </button>

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
