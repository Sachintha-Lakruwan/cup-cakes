function Gradient({ children, custom }) {
  return (
    <div
      className={`bg-stone-900 opacity-70 w-full h-full absolute top-0 left-0 z-10 ${custom}`}
    >
      {children}
    </div>
  );
}

export default Gradient;
