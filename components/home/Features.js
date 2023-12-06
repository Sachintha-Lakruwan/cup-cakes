import FeatureCard from "./FeatureCard";

const features = [
  {
    id: "feature-1",
    title: "Custom Cakes",
    text: "Your Special Cake, Your Style",
    img: "",
  },
  {
    id: "feature-2",
    title: "Free Shipping",
    text: "Free shipping on order",
    img: "",
  },
  {
    id: "feature-3",
    title: "Delight in Every Bite!",
    text: "Made with Love, Freshly for You",
    img: "",
  },
];

function Features() {
  return (
    <div className="w-full flex flex-col gap-8 lg:flex-row relative -top-[7vh] z-20 lg:-top-[8vh]">
      {features.map((item, index) => (
        <FeatureCard key={item.id} index={index} post={item} />
      ))}
    </div>
  );
}

export default Features;
