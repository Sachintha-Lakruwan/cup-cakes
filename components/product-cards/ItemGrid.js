import SingleItem from "./SingleItem";

function ItemGrid({ products }) {
  return (
    <div className="w-full flex flex-col gap-8 lg:flex-row">
      {products.map((item) => (
        <SingleItem product={item} key={item.id} />
      ))}
    </div>
  );
}

export default ItemGrid;
