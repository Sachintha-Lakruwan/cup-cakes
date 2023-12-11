import { motion } from "framer-motion";
import { usePopUp } from "../layout/Layout";
import Link from "next/link";
import { useRef } from "react";
import { signIn } from "next-auth/react";

function LoginPopUp() {
  const { setLogin } = usePopUp();
  const emailEl = useRef("test@example.com");
  const pwEl = useRef("test");

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: "test@example.com",
      pw: "test",
    });
    if (result.ok) {
      setLogin(false);
    }
  }
  return (
    <div className=" relative w-full h-[92vh] flex items-center justify-center">
      <div className="w-full h-full absolute top-0 left-0 z-10 glass" />
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-96 mx-auto md:h-screen lg:py-0 drop-shadow-2xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ref={emailEl}
                  value={"test@example.com"}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ref={pwEl}
                  value={"test"}
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default LoginPopUp;
