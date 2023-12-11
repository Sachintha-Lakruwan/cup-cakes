function UnderConstruction({ children }) {
  return (
    <div className="w-full h-[50vh] flex flex-col justify-evenly items-center ">
      <h1 className="text-3xl w-[50%] text-center text-gray-700 font-bold">
        🚧 This page is currently under construction. 🚧
      </h1>
      {children}
    </div>
  );
}

export default UnderConstruction;
