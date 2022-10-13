import React from "react";
import data from "./data";
import FeaturedCard from "../../../../design-system/components/FeaturedCard/featuredCard";
import img1 from "../../../../../shared/assets/images/img/bg-3.png";
import img2 from "../../../../../shared/assets/images/img/bg-4.png";
import img3 from "../../../../../shared/assets/images/img/bg-3.png";
import {
  Box,
  BoxBottomLeft,
  BoxBottomRight,
  ButtonSideLeft,
  ButtonSideRight,
  ImageBox,
  InfoBox,
  ParagraphBox,
  SideLeft,
  SideRight,
  TitleBoxTop,
  TitleSideLeft,
  TitleSideRight,
  TrendingSection,
  TrendingWrapper,
  TrendingWrapperBottom,
  TrendingWrapperTop,
} from "./Styles";
import { HeadTitle, ParagraphTitle } from "../PopularProducts/Styles";

export default function Trending() {
  return (
    <TrendingSection>
      <div className="container">
        <HeadTitle>Trending Products</HeadTitle>
        <ParagraphTitle>
          Lorem, ipsum dolor sit amen consectetur add passing elite.
        </ParagraphTitle>
        <TrendingWrapper>
          <TrendingWrapperTop>
            {data.map((property) => (
              <FeaturedCard key={property.id} property={property} />
            ))}
          </TrendingWrapperTop>

          <TrendingWrapperBottom>
            <BoxBottomLeft>
              <SideLeft>
                <TitleSideLeft>
                  50% off in all
                  <br /> products
                </TitleSideLeft>
                <ButtonSideLeft className="btn">Shop Now</ButtonSideLeft>
              </SideLeft>

              <SideRight>
                <TitleSideRight>
                  28% off in all
                  <br /> products
                </TitleSideRight>
                <ButtonSideRight className="btn">Shop Now</ButtonSideRight>
              </SideRight>
            </BoxBottomLeft>

            <BoxBottomRight>
              <Box>
                <ImageBox src={img1} alt=""></ImageBox>
                <InfoBox>
                  <TitleBoxTop>Rubber Safety Gloves</TitleBoxTop>
                  <ParagraphBox>$42.00</ParagraphBox>
                </InfoBox>
              </Box>
              <Box>
                <ImageBox src={img2} alt=""></ImageBox>
                <InfoBox>
                  <TitleBoxTop>Rubber Safety Gloves</TitleBoxTop>
                  <ParagraphBox>$42.00</ParagraphBox>
                </InfoBox>
              </Box>
              <Box>
                <img src={img3} alt="" />
                <InfoBox>
                  <TitleBoxTop>Rubber Safety Gloves</TitleBoxTop>
                  <ParagraphBox>$42.00</ParagraphBox>
                </InfoBox>
              </Box>
            </BoxBottomRight>
          </TrendingWrapperBottom>
        </TrendingWrapper>
      </div>
    </TrendingSection>
  );
}
