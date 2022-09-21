import type { NextPage } from "next";
import About from "../components/about";
import Blog from "../components/blog";
import Discount from "../components/discount";
import Feature from "../components/feature";
import Pricing from "../components/pricing";
import Slider from "../components/slider";
import { createClient } from "next-sanity";

const Home: NextPage = ({ blogs }: any) => {
  return (
    <>
      <Slider />
      <About />
      <Feature />
      <Pricing />
      <Discount />
      <Blog blogs={blogs} />
    </>
  );
};

const client = createClient({
  projectId: "rd8ppmd7",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: false,
});

export const getServerSideProps = async (context: any) => {
  const result = await client.fetch(`*[_type == "blogs"]`);

  if (!result || result.length === 0) {
    return {
      props: {
        blogs: [],
      },
    };
  } else {
    return {
      props: {
        blogs: result,
      },
    };
  }
};

export default Home;
