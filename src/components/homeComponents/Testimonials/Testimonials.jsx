import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Review from "./Review";

const Testimonials = () => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("./testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-3 xl:px-0 mb-24">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl capitalize mb-5">
          What our clients are saying
        </h2>
        <div className="flex justify-center">
          <div className="w-24 h-2 bg-red-500 rounded-xl"></div>
        </div>
      </div>
      <div className="mt-10">
        <div className="md:hidden">
          <Swiper
            modules={[Navigation, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {loading ? (
              <div className="flex justify-center">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : (
              reviews?.map((review, index) => (
                <SwiperSlide className="h-full" key={index}>
                  <Review review={review} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
        <div className="hidden md:block">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={20}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {loading ? (
              <div className="flex justify-center">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : (
              reviews?.map((review, index) => (
                <SwiperSlide className="h-full" key={index}>
                  <Review review={review} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
