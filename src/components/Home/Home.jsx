import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="container mx-auto flex justify-center ">
      <Helmet>
        <title>Movie Talks</title>
        <meta
          name="description"
          content="You can find the latest movie details on Movie Talks"
        />
      </Helmet>

      <div className=" flex justify-center items-center">
        <h1 className="text-6xl text-indigo-500">
          Site is in development mode...
        </h1>
        <div className="animate-spin ease-linear rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      </div>
    </div>
  );
};

export default Home;
