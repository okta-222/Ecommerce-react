import { Navigation } from "swiper";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import WeeklyCard from "components/WeeklyCard/WeeklyCard";
import data from "./data";
import {
  ButtonWeeklyLeft,
  ButtonWeeklyRight,
  HeadTitle,
  ParagaraphTitle,
  WeeklySection,
} from "./Styles";

export default function Weekly() {
  return (
    <WeeklySection>
      <div className="container">
        <HeadTitle>Weekly Top Seller</HeadTitle>
        <ParagaraphTitle>
          Lorem ipsum dolor sit, amen consectetur information elite.
        </ParagaraphTitle>
        <div className="butt">
          <ButtonWeeklyLeft>Hot Deals</ButtonWeeklyLeft>
          <ButtonWeeklyRight>Discount</ButtonWeeklyRight>
        </div>
        <div className="wrapper-slider">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 640px
              768: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {data.map((property) => {
              return (
                <SwiperSlide key={property.id}>
                  <WeeklyCard property={property} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </WeeklySection>
  );
}
