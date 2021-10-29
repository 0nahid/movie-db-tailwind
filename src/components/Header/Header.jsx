import React from "react";
import { HiArrowNarrowRight, HiFilm } from "react-icons/hi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <HiFilm className="h-8 w-8 text-indigo-500" />
            <span className="ml-3 text-xl">Movie Talks</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/trending" className="mr-5 hover:text-gray-900">
              Trending
            </Link>
            <Link to="/latest" className="mr-5 hover:text-gray-900">
              Latest
            </Link>
            <Link to="/" className="mr-5 hover:text-gray-900">
              {" "}
              Top-100
            </Link>
            <Link to="/" className="mr-5 hover:text-gray-900">
              {" "}
              IMDB
            </Link>
          </nav>

          <Link to="/login">
            <button className="inline-flex items-center bg-gray-100 text-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              <HiArrowNarrowRight className="w-4 h-4" /> Login
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
