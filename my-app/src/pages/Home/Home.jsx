import React from "react";
import HomeHeader from "./HomeHeader";
import HomeProjects from "./HomeProjects";
import HomeServices from "./HomeServices";
import HomeReviews from "./HomeReviews";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeProjects />
      <HomeServices />
      <HomeReviews/>
    </>
  );
};

export default Home;
