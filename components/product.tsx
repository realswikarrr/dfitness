/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
const Product = ({ products }: any) => {
  console.log(products);
  const [mappedProducts, setMappedProducts] = useState<any>([]);

  useEffect(() => {
    if (products.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "rd8ppmd7",
        dataset: "production",
      });

      setMappedProducts(
        products.map((b: any) => {
          return {
            ...b,
            image: imgBuilder.image(b.image),
          };
        })
      );
    } else {
      setMappedProducts([]);
    }
  }, [products]);

  return (
    <div className="justify-center grid grid-cols-4 place-items-start">
      {mappedProducts.length ? (
        mappedProducts.map((p: any, index: any) => (
          <div key={p._id}>
            <a href="#">
              <img
                className="p-8 rounded-t-lg w-[500px] h-[400px] object-cover"
                src={p.image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900  dark:text-white">
                  {p.title}
                </h5>
              </a>

              <div className="mt-2">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  RS {p.price}
                </span>
              </div>

              <div className="flex justify-between items-center mt-3">
                <Link href="#">
                  <span className=" cursor-pointer text-2xl text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center">
                    Buy Now
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          <h1>No Products Found</h1>
        </>
      )}
    </div>
  );
};

export default Product;
