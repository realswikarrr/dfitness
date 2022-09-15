/* eslint-disable @next/next/no-img-element */
import Moment from "moment";
import imageUrlBuilder from "@sanity/image-url";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";

import "swiper/css";
import { useEffect, useState } from "react";
import Link from "next/link";

const Blog = ({ blogs }: any) => {
  const [mappedPosts, setMappedPosts] = useState<any>([]);

  useEffect(() => {
    if (blogs.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "rd8ppmd7",
        dataset: "production",
      });

      setMappedPosts(
        blogs.map((b: any) => {
          return {
            ...b,
            image: imgBuilder.image(b.image).width(500).height(250),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [blogs]);

  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        <span>daily posts</span>
      </h1>

      <div className="swiper blogs-slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          <div className="swiper-wrapper">
            {mappedPosts.length ? (
              mappedPosts.map((p: any, index: any) => (
                <SwiperSlide key={p._id}>
                  <div className="swiper-slide slide">
                    <div className="image">
                      <img placeholder="blur" src={p.image} alt="" />
                    </div>
                    <div className="content">
                      <div className="link">
                        <a href="#">by {p.author}</a> <span>|</span>
                        <a href="#">
                          {Moment(p.date).format("DD/MM/YYYY HH:mm")}
                        </a>
                      </div>
                      <h3>{p.title}</h3>
                      <p>{p.shortDescription}</p>
                      <Link href={`/post/${p.slug.current}`}>
                        <span className="btn">read more</span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <>No Posts Yet</>
            )}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
