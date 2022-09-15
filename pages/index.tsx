import type { NextPage } from "next";
import About from "../components/about";
import Feature from "../components/feature";
import Pricing from "../components/pricing";
import Trainers from "../components/trainers";

const Home: NextPage = () => {
  return (
    <>
      <About />
      <Feature />
      <Pricing />
      <Trainers />
    </>
  );
};

export default Home;
