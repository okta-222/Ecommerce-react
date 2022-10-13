import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./data";
import CounterCard from "components/CounterCard/CounterCard";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import {
  Button,
  CartRight,
  ColorRight,
  CounterSection,
  CounterWrapper,
  IconFar,
  IconFilled,
  IconFour,
  IconOne,
  IconSpanText,
  IconThree,
  IconTwo,
  LoremRight,
  ParagraphRight,
  RateRight,
  SideLeft,
  SideRight,
  SliderWrapper,
  SpanRate,
  SpanText,
  TextRight,
  TitleColor,
  TitleText,
  TitleTextIcon,
} from "./Styles";

export default function Counter2() {
  const [counter, setCounter] = React.useState(1);
  let incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }
  return (
    <CounterSection>
      <div className="container">
        <CounterWrapper>
          <SideLeft>
            <SliderWrapper>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                spaceBetween={10}
                slidesPerView={1}
              >
                {data.map((property) => {
                  return (
                    <SwiperSlide key={property.id}>
                      <CounterCard property={property} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </SliderWrapper>
          </SideLeft>

          <SideRight>
            <TextRight>
              <h2>Blue Eye Googles</h2>
              <ParagraphRight>$32.00</ParagraphRight>
            </TextRight>
            <RateRight>
              <IconFilled className="filled fas fa-star"></IconFilled>
              <IconFilled className="filled fas fa-star"></IconFilled>
              <IconFilled className="filled fas fa-star"></IconFilled>
              <IconFilled className="filled fas fa-star"></IconFilled>
              <IconFar className="far fa-star"></IconFar>
              <SpanRate>(22)</SpanRate>
            </RateRight>
            <LoremRight>
              Lorem ipsum, dolor sit amen consectetur adieu siccing elite. Lilo
              liquid dubious laborer placet dicta nihil vera hic voluptuary, ut,
              laudanum provident laborer placet dicta nihil vera hic
            </LoremRight>
            <ColorRight>
              <TitleColor>Color : </TitleColor>
              <IconOne className="fa-solid fa-circle"></IconOne>
              <IconTwo className="fa-solid fa-circle"></IconTwo>
              <IconThree className="fa-solid fa-circle"></IconThree>
              <IconFour className="fa-solid fa-circle"></IconFour>
            </ColorRight>

            <CartRight>
              <button className="btn-green" onClick={decrementCounter}>
                -
              </button>
              <button className="btn2">{counter}</button>
              <button className="btn-green" onClick={incrementCounter}>
                +
              </button>
            </CartRight>

            <TextRight>
              <TitleText>
                Category :
                <SpanText>All. Featured. Medical. Covid 19. Mask.</SpanText>
              </TitleText>
              <TitleText>
                Tags :
                <SpanText>Black. Brown. Red. Shoes €0.00 - €150.00</SpanText>
              </TitleText>
              <TitleTextIcon>
                Share :
                <SpanText>
                  <IconSpanText className="fa-brands fa-facebook-f"></IconSpanText>
                  <IconSpanText className="fa-brands fa-twitter"></IconSpanText>
                  <IconSpanText className="fa-brands fa-palfed"></IconSpanText>
                  <IconSpanText className="fa-brands fa-vimeo"></IconSpanText>
                </SpanText>
              </TitleTextIcon>
            </TextRight>
            <Button>Add To Cart</Button>
          </SideRight>
        </CounterWrapper>
      </div>
    </CounterSection>
  );
}
