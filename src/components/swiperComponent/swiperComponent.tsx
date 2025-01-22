// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiper.css";
import { SLiderCOntent } from "../sliderContent/SliderContent";

interface Props {
  data: { year: number; value: string }[];
}

export const SwiperComponent: React.FC<Props> = ({ data }) => {
  return (
    <Swiper
      className="swiper"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      breakpoints={{
        600: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={50}
      slidesPerView={2}
      pagination={{ clickable: true }}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <SLiderCOntent data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
