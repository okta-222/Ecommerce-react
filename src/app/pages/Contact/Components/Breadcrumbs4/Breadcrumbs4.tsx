import React from "react";
import {
  Breadcrumbs,
  Title,
  InfoBreadcrumbs,
  TitleInfo,
  IconInfo,
} from "./Styles";
import { NavLink } from "react-router-dom";

export default function Breadcrumbs4() {
  return (
    <Breadcrumbs>
      <div className="container">
        <div>
          <Title>Contact Us</Title>
          <InfoBreadcrumbs>
            <NavLink to="/">
              <TitleInfo>Home</TitleInfo>
            </NavLink>
            <IconInfo className="fa-solid fa-angle-right"></IconInfo>
            <NavLink to="/Contact">
              <TitleInfo>Contact Us</TitleInfo>
            </NavLink>
          </InfoBreadcrumbs>
        </div>
      </div>
    </Breadcrumbs>
  );
}
