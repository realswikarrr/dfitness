import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";

import "swiper/css";

const Slider = () => {
  return (
    <section className="home" id="home">
      <div className="swiper home-slider">
        <div className="swiper-wrapper">
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <div
                className="swiper-slide slide"
                style={{
                  background: "url(./images/home-bg-1.jpg) no-repeat",
                  height: "100vh",
                }}
              >
                <div className="content">
                  <span>be strong, be fit</span>
                  <h3>Make yourself stronger than your excuses.</h3>
                  <a href="#" className="btn">
                    get started
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="swiper-slide slide"
                style={{
                  background: "url(images/home-bg-2.jpg) no-repeat ",
                  height: "100vh",
                }}
              >
                <div className="content">
                  <span>be strong, be fit</span>
                  <h3>Make yourself stronger than your excuses.</h3>
                  <a href="#" className="btn">
                    get started
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="swiper-slide slide"
                style={{
                  background: "url(images/home-bg-3.jpg) no-repeat",
                  height: "100vh",
                }}
              >
                <div className="content">
                  <span>be strong, be fit</span>
                  <h3>Make yourself stronger than your excuses.</h3>
                  <a href="#" className="btn">
                    get started
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

export default Slider;
