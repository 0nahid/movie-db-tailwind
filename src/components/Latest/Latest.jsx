import React from "react";
import { Helmet } from "react-helmet";

const Latest = () => {
  return (
    <div>
      <Helmet>
        <title>Latest - Movie Talks</title>
      </Helmet>
      <div
        className="shadow-md rounded-md overflow-hidden"
        style={{ width: "300px" }}
      >
        <img
          src="https://mdbootstrap.com/img/new/standard/city/031.jpg"
          className=""
          alt=""
        />

        <div className="p-4">
          <h5 className="text-xl font-semibold mb-2">Card title</h5>

          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi
            tenetur, voluptatibus harum consequuntur alias quaerat excepturi
            temporibus nisi commodi, ex, ratione quae soluta! Saepe alias
            dolores dolorem assumenda totam?
          </p>

          <button
            className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Latest;
