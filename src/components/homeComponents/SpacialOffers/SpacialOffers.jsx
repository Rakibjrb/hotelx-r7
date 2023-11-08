import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image1 from "../../../assets/img/SpacialOffers/bannerImage1.jpg";
import { Link } from "react-router-dom";
import Image2 from "../../../assets/img/SpacialOffers/bannerImage2.jpg";

const SpacialOffers = () => {
  return (
    <div className="max-w-6xl mb-24 mx-auto px-3 xl:px-0">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl capitalize mb-5">
          Special Offers and Promotions
        </h2>
        <div className="flex justify-center">
          <div className="w-24 h-2 bg-red-500 rounded-xl"></div>
        </div>
      </div>

      <div data-aos="zoom-in-down" data-aos-duration="1500" className="mt-10">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="">
            <div className="relative py-[130px] md:py-[30px] lg:py-0 lg:h-[400px]">
              <img
                className="w-full rounded-lg"
                src={Image1}
                alt="banner image 1"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000065] rounded-lg">
                <div className="w-full h-full flex items-center">
                  <div className="text-white px-8">
                    <h2 className="text-xl text-center md:text-left md:text-5xl mb-2 md:mb-4">
                      Stay Longer, Pay Less
                    </h2>
                    <h1 className="text-3xl text-center w-[80%] md:w-full mx-auto md:mx-0 md:text-left md:text-6xl">
                      Book Room and
                      <span className="text-red-500 font-extrabold">
                        {" "}
                        Get 20% off
                      </span>
                    </h1>
                    <p className="text-xl text-center md:text-left md:w-3/5 mt-2">
                      {"Stay Longer, Pay Less"} – Extend your stay and enjoy
                      greater savings. Discover the luxury of extra time in a
                      tranquil retreat.
                    </p>
                    <div className="flex justify-center md:justify-start">
                      <Link
                        to="/rooms"
                        className="btn bg-red-500 text-white hover:text-black mt-5"
                      >
                        See Available Rooms
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="relative py-[130px] md:py-[30px] lg:py-0 lg:h-[400px]">
              <img
                className="w-full rounded-lg"
                src={Image2}
                alt="banner image 1"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000065] rounded-lg">
                <div className="w-full h-full flex items-center">
                  <div className="text-white px-8">
                    <h2 className="text-xl text-center md:text-left md:text-5xl mb-2 md:mb-4">
                      Family Fun Package
                    </h2>
                    <h1 className="text-3xl text-center w-[80%] md:w-full mx-auto md:mx-0 md:text-left md:text-6xl">
                      Book Family Room and
                      <span className="text-red-500 font-extrabold">
                        {" "}
                        Get 40% off
                      </span>
                    </h1>
                    <p className="text-xl text-center md:text-left md:w-3/5 mt-2">
                      Make unforgettable memories with the whole family! Our
                      Family Fun Package is the perfect way to enjoy quality
                      time together.
                    </p>
                    <div className="flex justify-center md:justify-start">
                      <Link
                        to="/rooms"
                        className="btn bg-red-500 text-white hover:text-black mt-5"
                      >
                        See Available Rooms
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SpacialOffers;
