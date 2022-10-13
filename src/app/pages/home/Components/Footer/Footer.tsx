import React from "react";
import data from "./data";
import FooterCard from "../../../../design-system/components/FooterCard/footerCard";
import ScrollToTop from "react-scroll-to-top";
import { NavLink } from "react-router-dom";
import {
  FooterSection,
  ResultWrapper,
  FooterWrapper,
  CopyrightWrapper,
  InfoCopyright,
  TitleCopyright,
  TitleCardThree,
  CardOne,
  CardTwo,
  CardThree,
  TitleCardFooter,
  Social,
  LinkSocial,
  TitleHeadFive,
  IconSocial,
  ParagraphFooter,
  Links,
  TitleLink,
  ItemLinks,
  IconLine,
  LineCard,
  FormSearch,
  InfoLine,
  InputBar,
  ButtonBar,
  SearchBar,
} from "./Styles";

export default function Footer() {
  return (
    <FooterSection>
      <div className="container">
        <ResultWrapper>
          {data.map((property) => (
            <FooterCard key={property.id} property={property} />
          ))}
        </ResultWrapper>

        <FooterWrapper>
          <CardOne>
            <TitleCardThree>About Us</TitleCardThree>
            <ParagraphFooter>
              Lorem ipsum, dolor sit amen consectetur add piercing elite. Lorem
              ipsum, dolor sit amen consectetur add piercing elite. Temporizes
              nullo rem, pianissimos isth aspirator
            </ParagraphFooter>
            <Social>
              <LinkSocial>
                <TitleHeadFive className="facebook">
                  <IconSocial className="fa-brands fa-telegram"></IconSocial>
                </TitleHeadFive>
              </LinkSocial>
              <LinkSocial>
                <TitleHeadFive className="facebook">
                  <IconSocial className="fab fa-facebook-f"></IconSocial>
                </TitleHeadFive>
              </LinkSocial>
              <LinkSocial>
                <TitleHeadFive className="twitter">
                  <IconSocial className="fab fa-twitter"></IconSocial>
                </TitleHeadFive>
              </LinkSocial>
              <LinkSocial>
                <TitleHeadFive className="youtube">
                  <IconSocial className="fab fa-youtube"></IconSocial>
                </TitleHeadFive>
              </LinkSocial>
            </Social>
          </CardOne>
          <CardTwo>
            <Links>
              <ItemLinks>
                <TitleCardFooter>Useful Links</TitleCardFooter>
              </ItemLinks>
              <ItemLinks>
                <TitleLink>about</TitleLink>
              </ItemLinks>
              <ItemLinks>
                <NavLink to="/blog">
                  <TitleLink>blog</TitleLink>
                </NavLink>
              </ItemLinks>
              <ItemLinks>
                <TitleLink>partners</TitleLink>
              </ItemLinks>
              <ItemLinks>
                <TitleLink>room details</TitleLink>
              </ItemLinks>
              <ItemLinks>
                <TitleLink>gallery</TitleLink>
              </ItemLinks>
              <ItemLinks>
                <TitleLink>contacts</TitleLink>
              </ItemLinks>
            </Links>
          </CardTwo>
          <CardTwo>
            <Links>
              <ItemLinks>
                <TitleCardFooter>help?</TitleCardFooter>
              </ItemLinks>
              <ItemLinks>
                <h5>faq</h5>
              </ItemLinks>
              <ItemLinks>
                <h5>term&condition</h5>
              </ItemLinks>
              <ItemLinks>
                <h5>reporting</h5>
              </ItemLinks>
              <ItemLinks>
                <h5>documintation</h5>
              </ItemLinks>
              <ItemLinks>
                <h5>support policy</h5>
              </ItemLinks>
              <ItemLinks>
                <h5>privacy</h5>
              </ItemLinks>
            </Links>
          </CardTwo>

          <CardThree>
            <LineCard>
              <IconLine className="fa-solid fa-cart-shopping"></IconLine>
              <InfoLine>Ecomax</InfoLine>
            </LineCard>
            <LineCard>
              <div className="info">
                We are a team of designers and developers create high quality
                Magenta, Pretaste
              </div>
            </LineCard>
            <LineCard>
              <IconLine className="fas fa-map-marker-alt fa-fw"></IconLine>
              <div className="info">245 Lilian Blvd, Holeproof</div>
            </LineCard>
            <ScrollToTop smooth />
            <FormSearch>
              <SearchBar>
                <InputBar
                  type="text"
                  name="Input"
                  placeholder="Enter email address"
                ></InputBar>
                <ButtonBar id="Submit" type="submit">
                  Subscribe
                </ButtonBar>
              </SearchBar>
            </FormSearch>
          </CardThree>
        </FooterWrapper>
      </div>
      <CopyrightWrapper>
        <h4>Theme 2022 all rights reserved</h4>
        <InfoCopyright>
          <TitleCopyright>Terms Of Use</TitleCopyright>
          <h4>Privacy Policy</h4>
        </InfoCopyright>
      </CopyrightWrapper>
    </FooterSection>
  );
}
