import type { NextPage } from "next";
import About from "../components/about";
import Feature from "../components/feature";

const Home: NextPage = () => {
  return (
    <>
      <About />
      <Feature />
    </>
  );
};

export default Home;
