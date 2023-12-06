import FeatureCard from "./FeatureCard";

const features = ["1", "2", "3"];

function Features() {
  return (
    <div className="w-full flex flex-col gap-8 lg:flex-row relative -top-[7vh] z-20 lg:-top-[8vh]">
      {features.map((item, index) => (
        <FeatureCard key={item} index={index} />
      ))}
    </div>
  );
}

export default Features;
