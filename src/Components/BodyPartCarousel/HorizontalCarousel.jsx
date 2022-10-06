import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import BodyPart from "../BodyPart/BodyPart";
import "swiper/css";
import "swiper/css/pagination";

export default function HorizontalCarousel({ items, setBodyPart, bodyPart }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {items.map((item) => {
          console.log(item);

          return (
            <SwiperSlide>
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
                key={item.id}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
