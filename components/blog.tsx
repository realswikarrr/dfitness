import Image from "next/image";
import BlogImage1 from "../public/images/blog-1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";

import "swiper/css";

const Blog = () => {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        <span>daily posts</span>
      </h1>

      <div className="swiper blogs-slider">
        <div className="swiper-wrapper">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <div className="swiper-slide slide">
                <div className="image">
                  <Image placeholder="blur" src={BlogImage1} alt="" />
                </div>
                <div className="content">
                  <div className="link">
                    <a href="#">by user</a> <span>|</span>
                    <a href="#">21st may, 2021</a>
                  </div>
                  <h3>fitness is not about being better than someone else</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquam, tenetur?
                  </p>
                  <a href="#" className="btn">
                    read more
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="swiper-slide slide">
                <div className="image">
                  <Image placeholder="blur" src={BlogImage1} alt="" />
                </div>
                <div className="content">
                  <div className="link">
                    <a href="#">by user</a> <span>|</span>
                    <a href="#">21st may, 2021</a>
                  </div>
                  <h3>fitness is not about being better than someone else</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquam, tenetur?
                  </p>
                  <a href="#" className="btn">
                    read more
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="swiper-slide slide">
                <div className="image">
                  <Image placeholder="blur" src={BlogImage1} alt="" />
                </div>
                <div className="content">
                  <div className="link">
                    <a href="#">by user</a> <span>|</span>
                    <a href="#">21st may, 2021</a>
                  </div>
                  <h3>fitness is not about being better than someone else</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquam, tenetur?
                  </p>
                  <a href="#" className="btn">
                    read more
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="swiper-slide slide">
                <div className="image">
                  <Image placeholder="blur" src={BlogImage1} alt="" />
                </div>
                <div className="content">
                  <div className="link">
                    <a href="#">by user</a> <span>|</span>
                    <a href="#">21st may, 2021</a>
                  </div>
                  <h3>fitness is not about being better than someone else</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquam, tenetur?
                  </p>
                  <a href="#" className="btn">
                    read more
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className="swiper-slide slide">
                <div className="image">
                  <Image placeholder="blur" src={BlogImage1} alt="" />
                </div>
                <div className="content">
                  <div className="link">
                    <a href="#">by user</a> <span>|</span>
                    <a href="#">21st may, 2021</a>
                  </div>
                  <h3>fitness is not about being better than someone else</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquam, tenetur?
                  </p>
                  <a href="#" className="btn">
                    read more
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
