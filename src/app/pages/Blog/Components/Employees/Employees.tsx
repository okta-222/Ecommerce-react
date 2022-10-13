import React, { useState } from "react";
import img1 from "../../../../../shared/assets/images/img/avatar-04.png";
import data from "./data";
import EmployeesCard from "../../../../design-system/components/EmployeesCard/EmployeesCard";
import data2 from "./data2";
import EmployeeCard from "../../../../design-system/components/EmployeeCard/EmployeeCard";
import {
  ButtonCardTwo,
  CardFive,
  CardFour,
  CardOne,
  CardSix,
  CardThree,
  CardTwo,
  EmployeesWrapper,
  FormCardTwo,
  HeadCardOne,
  HeadCardTwo,
  IconCardFive,
  IconCardHover,
  IconCardOne,
  IconCardTwo,
  IconHover,
  ImageCardOne,
  InputCardTwo,
  ItemCardSix,
  ItemCardThree,
  ListCardSix,
  ListCardThree,
  ParagraphCardOne,
  RateIconOne,
  RateIconOneFar,
  RateSpanOne,
  SearchCardTwo,
  SideLeft,
  SideRight,
  TextCardOne,
  TitleCardFive,
  TitleCardFour,
  TitleCardSix,
  TitleCardThree,
  TitleCardTwo,
} from "./Styles";
export default function Employees() {
  return (
    <div className="Employees">
      <div className="container">
        <EmployeesWrapper>
          <SideLeft>
            <div className="employees-img">
              {data.map((property) => (
                <EmployeesCard key={property.id} property={property} />
              ))}
            </div>
          </SideLeft>

          <SideRight>
            <CardOne>
              <ImageCardOne src={img1} alt="img"></ImageCardOne>
              <TextCardOne>
                <HeadCardOne>mahdi mohammed</HeadCardOne>
                <HeadCardTwo>traveler / photographer</HeadCardTwo>
                <div className="rate">
                  <RateIconOne className="filled fas fa-star"></RateIconOne>
                  <RateIconOne className="filled fas fa-star"></RateIconOne>
                  <RateIconOne className="filled fas fa-star"></RateIconOne>
                  <RateIconOneFar className="far fa-star"></RateIconOneFar>
                  <RateIconOneFar className="far fa-star"></RateIconOneFar>
                  <RateSpanOne>(1 review)</RateSpanOne>
                </div>
                <ParagraphCardOne>
                  Lorem ipsum dolor sit amen consectetur adip isling elite Est
                  volutes laborer eacute.
                </ParagraphCardOne>
                <IconCardOne>
                  <IconHover className="fab fa-facebook-f hover"></IconHover>
                  <IconHover className="fab fa-twitter hover"></IconHover>
                  <IconHover className="fab fa-youtube hover"></IconHover>
                  <IconHover className="fab fa-linkedin-in hover"></IconHover>
                </IconCardOne>
              </TextCardOne>
            </CardOne>

            <CardTwo>
              <TitleCardTwo>Search</TitleCardTwo>
              <FormCardTwo>
                <SearchCardTwo>
                  <InputCardTwo
                    id="Input-bar"
                    type="text"
                    name="Input"
                    placeholder="Search for posts"
                  ></InputCardTwo>
                  <ButtonCardTwo id="Submit" type="submit">
                    <IconCardTwo className="fa-solid fa-magnifying-glass"></IconCardTwo>
                  </ButtonCardTwo>
                </SearchCardTwo>
              </FormCardTwo>
            </CardTwo>
            <CardThree>
              <TitleCardThree>Categories</TitleCardThree>
              <ListCardThree>
                <ItemCardThree>medical kits (14)</ItemCardThree>
                <ItemCardThree>herbal medicine (21)</ItemCardThree>
                <ItemCardThree>believe oil massage (17)</ItemCardThree>
                <ItemCardThree>organic beckett (09)</ItemCardThree>
                <ItemCardThree>fishes meats (269)</ItemCardThree>
              </ListCardThree>
            </CardThree>

            <CardFour>
              <TitleCardFour>Latest Blogs</TitleCardFour>
              {data.map((property) => (
                <EmployeeCard key={property.id} property={property} />
              ))}
            </CardFour>
            
            <CardFive>
              <TitleCardFive>follow us</TitleCardFive>
              <IconCardFive>
                <IconCardHover className="fab fa-facebook-f hover"></IconCardHover>
                <IconCardHover className="fab fa-twitter hover"></IconCardHover>
                <IconCardHover className="fab fa-youtube hover"></IconCardHover>
                <IconCardHover className="fab fa-linkedin-in hover"></IconCardHover>
              </IconCardFive>
            </CardFive>

            <CardSix>
              <TitleCardSix>Category</TitleCardSix>
              <ListCardSix>
                <ItemCardSix>covid-19</ItemCardSix>
                <ItemCardSix>healthy</ItemCardSix>
                <ItemCardSix>medicine</ItemCardSix>
                <ItemCardSix>tablet</ItemCardSix>
                <ItemCardSix>juices</ItemCardSix>
                <ItemCardSix>natural</ItemCardSix>
              </ListCardSix>
            </CardSix>
          </SideRight>
        </EmployeesWrapper>
      </div>
    </div>
  );
}
