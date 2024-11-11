import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Content from "./Content";
import FAQ from "./Faq";
import MediaCard from "./Card";

const Home = () => {
  return (
    <div>
      <Banner />
      <MediaCard />
      <Content />
      <FAQ />
    </div>
  );
};

export default Home;
