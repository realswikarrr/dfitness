import type { NextPage } from "next";
import About from "../components/about";
import Blog from "../components/blog";
import Discount from "../components/discount";
import Feature from "../components/feature";
import Pricing from "../components/pricing";
import Slider from "../components/slider";
import Trainers from "../components/trainers";

const Home: NextPage = () => {
  return (
    <>
      <Slider />
      <About />
      <Feature />
      <Pricing />
      <Trainers />
      <Discount />
      <Blog />
    </>
  );
};

export default Home;
