import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Bar,
  ButtonBar,
  Container,
  ContainerNavbar,
  FormFields,
  HeaderSection,
  IconBar,
  IconLangue,
  IconLanguge,
  IconPlace,
  IconSocial,
  IconSocialHeart,
  IconSpanOne,
  InputBar,
  LinkNav,
  Navbar,
  NavItem,
  NavLogo,
  NavToggle,
  ParagraphTop,
  SearchBar,
  SelectIcon,
  SpanOne,
  SpanTop,
  TopHeader,
  TopLeft,
  TopRight,
  TopRightIcon,
  WrapperTopHeader,
} from "./Styles";
import axios from "axios"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const options = {
    method: 'GET',
    url: 'https://amazon-price1.p.rapidapi.com/search',
    params: {keywords: '<REQUIRED>', marketplace: 'ES'},
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'amazon-price1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  return (
    <HeaderSection>
      <TopHeader>
        <Container>
          <WrapperTopHeader>
            <TopLeft>
              <SpanTop> Free Shipping </SpanTop>
              <ParagraphTop> Orders From All item</ParagraphTop>
            </TopLeft>
            <TopRight>
              <TopRightIcon>
                <IconLangue>
                  <IconLanguge className="fa-solid fa-earth-africa"></IconLanguge>
                  <SelectIcon>
                    <option value="0">EN</option>
                    <option value="1">AR</option>
                    <option value="1">FR</option>
                    <option value="1">SP</option>
                  </SelectIcon>
                </IconLangue>

                <IconPlace>
                  <SelectIcon>
                    <option value="0">USD</option>
                    <option value="1">dolor</option>
                    <option value="1">euro</option>
                    <option value="1">pound</option>
                  </SelectIcon>
                </IconPlace>

                <IconSocial>
                  <IconSocialHeart className="fa-regular fa-heart"></IconSocialHeart>
                  <NavLink to="/dashboard">
                    <IconSocialHeart className="fa-regular fa-user"></IconSocialHeart>
                  </NavLink>
                  <IconSocialHeart className="fa-solid fa-cart-arrow-down"></IconSocialHeart>
                </IconSocial>
              </TopRightIcon>
            </TopRight>
          </WrapperTopHeader>
        </Container>
      </TopHeader>

      <Navbar>
        <ContainerNavbar>
          <NavLogo>
            <SpanOne>
              <NavLink to="/">
                <IconSpanOne className="fa-solid fa-cart-arrow-down"></IconSpanOne>{" "}
                Ecomax
              </NavLink>
            </SpanOne>
          </NavLogo>
          <NavItem className={`nav-items ${isOpen && "open"}`}>
            <NavLink to="/">
              <LinkNav>Home</LinkNav>
            </NavLink>
            <NavLink to="/shop">
              <LinkNav>Shop</LinkNav>
            </NavLink>
            <NavLink to="/category">
              <LinkNav>Category</LinkNav>
            </NavLink>
            <NavLink to="/blog">
              <LinkNav>Blog</LinkNav>
            </NavLink>
            <NavLink to="/contact">
              <LinkNav>Contact</LinkNav>
            </NavLink>
            <NavLink to="/faq">
              <LinkNav>Faq</LinkNav>
            </NavLink>
          </NavItem>

          <NavToggle
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Bar></Bar>
          </NavToggle>
          <FormFields>
            <SearchBar>
              <InputBar
                type="text"
                name="Input"
                placeholder="Find Products"
              ></InputBar>
              <ButtonBar type="submit">
                <IconBar className="fa-solid fa-magnifying-glass"></IconBar>
              </ButtonBar>
            </SearchBar>

            <div
              className={`nav-toggle ${isOpen && "open"}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="bar"></div>
            </div>
          </FormFields>
        </ContainerNavbar>
      </Navbar>
    </HeaderSection>
  );
}
