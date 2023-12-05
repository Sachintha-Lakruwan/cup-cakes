import FeatureCard from "./FeatureCard";

const features = ["1", "2", "3"];

function Features() {
  return (
    <div className="w-full flex flex-col gap-8 lg:flex-row relative -top-[7dvh] z-20 lg:-top-[8dvh]">
      {features.map((item, index) => (
        <FeatureCard key={item} />
      ))}
    </div>
  );
}

export default Features;
