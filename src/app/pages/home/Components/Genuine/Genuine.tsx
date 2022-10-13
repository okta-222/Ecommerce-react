import React from "react";
import four from "../../../../../shared/assets/images/im1.png";
import {
  ButtGenuine,
  ButtonOne,
  ButtonTwo,
  Container,
  GenuineImg,
  GenuineSection,
  GenuineTxt,
  IconeGenuine,
  Image,
  ParagraphGenuine,
  TitleGenuine,
} from "./Styles";

export default function Genuine() {
  return (
    <GenuineSection>
      <Container>
        <GenuineTxt>
          <ParagraphGenuine>
            <IconeGenuine className="fa-solid fa-apple-whole"></IconeGenuine>{" "}
            100% genuine products
          </ParagraphGenuine>
          <TitleGenuine>
            Tasty & Healthy <br /> Organic Food
          </TitleGenuine>
          <ButtGenuine>
            <ButtonOne>
              View Products <i className="fa-solid fa-arrow-right"></i>
            </ButtonOne>
            <ButtonTwo>
              About Shop <i className="fa-solid fa-arrow-right"></i>
            </ButtonTwo>
          </ButtGenuine>
        </GenuineTxt>
        <GenuineImg>
          <Image src={four} alt=""></Image>
        </GenuineImg>
      </Container>
    </GenuineSection>
  );
}
