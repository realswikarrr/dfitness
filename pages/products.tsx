import Product from "../components/product";
import { createClient } from "next-sanity";
/* eslint-disable @next/next/no-img-element */
const Products = ({ products }: any) => {
  return (
    <section className="mt-28 md:mt-10">
      <h1 className="heading">
        <span>Our Products</span>
      </h1>

      <div className="w-full mx-auto rounded-lg shadow-md ">
        <Product products={products} />
      </div>
    </section>
  );
};

const client = createClient({
  projectId: "rd8ppmd7",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: false,
});

export const getServerSideProps = async (context: any) => {
  const result = await client.fetch(`*[_type == "products"]`);

  if (!result || result.length === 0) {
    return {
      props: {
        products: [],
      },
    };
  } else {
    return {
      props: {
        products: result,
      },
    };
  }
};

export default Products;
