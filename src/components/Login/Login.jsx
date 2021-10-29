import React from "react";
import { Helmet } from "react-helmet";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  const handleEmailSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Helmet>
        <title>Login - Movie Talks</title>
      </Helmet>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center ">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0  netflix-bg ">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Welcome to Movie Talks. Here you can find the latest news of
              movie.
            </h1>

            <p className="leading-relaxed mt-4">
              To access all the content , you need to be a user of Movie Talks.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>

            {/* form part */}
            <form onSubmit={handleEmailSignUp}>
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                  autoComplete="false"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                  autoComplete="false"
                />
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                  autoComplete="false"
                />
              </div>
              <button className="text-white w-full bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Sign Up
              </button>
              <p className="text-center ">Or,</p>
              <button className="flex w-full items-center text-center justify-center bg-gray-200 py-2 px-8 mt-1 focus:outline-none hover:bg-gray-400 rounded text-lg">
                <FaGoogle className="mr-2" />
                Login with Google
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
