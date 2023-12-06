import Link from "next/link";
// animate-bounce

function HeroButton() {
  return (
    <div className="animate-bounce px-4 py-2 border transition delay-75 duration-300 ease-in-out hover:bg-gray-200 hover:text-gray-800">
      <Link href={"/shop"}>SHOP NOW</Link>
    </div>
  );
}

export default HeroButton;
