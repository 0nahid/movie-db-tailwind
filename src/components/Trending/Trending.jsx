import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Helmet } from "react-helmet";
const data = {
  labels: [
    "Romance",
    "Drama",
    "Fiction",
    "Western",
    "Horror",
    "Comedy",
    "Thriller",
    "Action",
    "Animation",
    "War",
    "Teen",
    "Dark",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3, 5, 3, 16, 9, 4, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(0, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 142, 0.2)",
        "rgba(153, 102, 255,0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(36, 92, 162, 0.2)",
        "rgba(255, 255, 0, 0.2)",
        "rgba(255, 25, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(0, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 142, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(36, 92, 162, 1)",
        "rgba(255, 255, 0, 1)",
        "rgba(255, 25, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Trending = () => {
  return (
    <div>
      <Helmet>
        <title>Trending | Movie Talks</title>
      </Helmet>
      <div className="w-ful md:w-1/2 mx-auto">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default Trending;
