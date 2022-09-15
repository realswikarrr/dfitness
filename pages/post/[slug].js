/* eslint-disable @next/next/no-img-element */
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { useEffect, useState } from "react";
import Moment from "moment";

const Post = ({ title, body, image, author, date }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "rd8ppmd7",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
    <div className="mt-36 flex justify-center flex-col max-w-3xl md:max-w-6xl lg:max-w-screen-lg mx-auto items-center ">
      {imageUrl && (
        <img className="h-[300px] mt-2 rounded-md" src={imageUrl} alt="" />
      )}
      <h1 className="text-white text-4xl mt-5">{title}</h1>

      <h1 className="text-white mt-4 text-xl space-x-2">
        By:<span className="text-red-500"> {author}</span>{" "}
        <span>on: {Moment(date).format("DD/MM/YYYY HH:mm")}</span>
      </h1>
      <div className="text-white text-2xl mt-4 text-justify">
        <PortableText value={body} />
      </div>
    </div>
  );
};

const client = createClient({
  projectId: "rd8ppmd7",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: false,
});

export const getServerSideProps = async (context) => {
  const pageSlug = context.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const result = await client.fetch(
    `*[_type == "blogs" && slug.current == "${pageSlug}"]`
  );

  const post = result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        title: post.title,
        body: post.body,
        image: post.image,
        author: post.author,
        date: post.publishedAt,
      },
    };
  }
};

export default Post;
