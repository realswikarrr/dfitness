/* eslint-disable @next/next/no-img-element */
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { useEffect, useState } from "react";

const Post = ({ title, body, image }) => {
  console.log(body);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "rd8ppmd7",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
    <div className="mt-24 flex justify-center flex-col max-w-7xl mx-auto items-center">
      <h1 className="text-white text-4xl">{title}</h1>
      {imageUrl && <img src={imageUrl} alt="" />}
      <div className="text-white text-2xl mt-4">
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
  console.log(result);
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
      },
    };
  }
};

export default Post;
