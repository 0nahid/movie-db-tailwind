import React from "react";
import { HiArrowNarrowRight, HiFilm } from "react-icons/hi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <HiFilm className="h-8 w-8 text-indigo-500" />
            <span className="ml-3 text-xl">Movie Talks</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-gray-900">
              Trending
            </a>
            <a href="/" className="mr-5 hover:text-gray-900">
              Latest
            </a>
            <a href="/" className="mr-5 hover:text-gray-900">
              Top 100
            </a>
            <a href="/" className="mr-5 hover:text-gray-900">
              IMDB
            </a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 text-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <a href="/login">Login</a>
            <HiArrowNarrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
