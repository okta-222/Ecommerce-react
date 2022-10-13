import React from "react";
import {
  Breadcrumbs,
  Title,
  InfoBreadcrumbs,
  TitleInfo,
  IconInfo,
} from "./Styles";
import { NavLink } from "react-router-dom";

export default function Breadcrumbs5() {
  return (
    <Breadcrumbs>
      <div className="container">
        <div>
          <Title>Faqs</Title>
          <InfoBreadcrumbs>
            <NavLink to="/">
              <TitleInfo>Home</TitleInfo>
            </NavLink>
            <IconInfo className="fa-solid fa-angle-right"></IconInfo>
            <NavLink to="/Faq">
              <TitleInfo>Faqs</TitleInfo>
            </NavLink>
          </InfoBreadcrumbs>
        </div>
      </div>
    </Breadcrumbs>
  );
}
