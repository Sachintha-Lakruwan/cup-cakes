// function Footer() {
//   return (
//     <div className=" my-20 bg-white w-full py-10 flex justify-center">
//       <div className=" flex justify-center w-5/6 sm:w-3/5 lg:w-3/4 md:gap-[2%]">
//         Footer
//       </div>
//     </div>
//   );
// }

// export default Footer;
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 pt-8 pb-6 w-full flex justify-center text-gray-100">
      <div className="flex flex-col w-5/6 sm:w-3/5 lg:w-3/4">
        <div className="flex flex-col text-left lg:text-left lg:flex-row">
          <div className="w-full lg:w-6/12">
            <h4 className="text-3xl fonat-semibold text-blueGray-700 text-center lg:text-left">
              Let&apos;s keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600  text-center lg:text-left">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex justify-center lg:justify-start">
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-pink-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-instagram"></i>
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-facebook-square"></i>
              </button>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="w-full px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © 2023 Cake Craft
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
