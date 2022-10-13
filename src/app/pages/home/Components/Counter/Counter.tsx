import React from "react";
import img from "../../../../../shared/assets/images/savon.png";
import {
  BrandText,
  BtnCount,
  ButnCounter,
  ButtonOne,
  ButtonTwo,
  CartText,
  CounterSection,
  CounterWrapper,
  IconText,
  ImageCount,
  ImgCounter,
  ParagraphText,
  SpanCounter,
  TextCounter,
  TitleTextFive,
  WeightText,
} from "./Styles";

export default function Counter() {
  // Counter function to control of "Quantity of Brand" that will be added to Cart
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
          <ImgCounter>
            <ImageCount src={img} alt="img"></ImageCount>
          </ImgCounter>
          <TextCounter>
            <SpanCounter>Product Review</SpanCounter>
            <h2>Savona Herbal Oil</h2>
            <span>$30.00-$40.00</span>
            <BrandText>
              <h4>Brand: </h4>
              <IconText className="fa-brands fa-canadian-maple-leaf"></IconText>
            </BrandText>
            <ParagraphText>
              Lorem Ipsum is simply dummy text of the printing and types <br />
              industry. Lorem Ipsum has been the industry's dummy
              <br />
              text ever since the 1500s, when an printing Ipsum
            </ParagraphText>
            <WeightText>
              <h3>weight:</h3>
              <TitleTextFive>1kg</TitleTextFive>
              <TitleTextFive>5kg</TitleTextFive>
              <TitleTextFive>250g</TitleTextFive>
            </WeightText>

            <CartText>
              <ButtonOne>Add To Cart</ButtonOne>
              <ButtonTwo>{counter}</ButtonTwo>

              <BtnCount>
                <ButnCounter onClick={incrementCounter}>+</ButnCounter>
                <ButnCounter onClick={decrementCounter}>-</ButnCounter>
              </BtnCount>
            </CartText>
          </TextCounter>
        </CounterWrapper>
      </div>
    </CounterSection>
  );
}
