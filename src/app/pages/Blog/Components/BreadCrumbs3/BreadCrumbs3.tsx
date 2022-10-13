
import React from "react";
import {
  Breadcrumbs, 
  Title,
  InfoBreadcrumbs,
  TitleInfo,
  IconInfo,
} from "./Styles";
import { NavLink } from "react-router-dom";

export default function Breadcrumbs3() {
  return (
    <Breadcrumbs>
      <div className="container">
        <div>
          <Title>Blog</Title>
          <InfoBreadcrumbs>
            <NavLink to="/">
              <TitleInfo>Home</TitleInfo>
            </NavLink>
            <IconInfo className="fa-solid fa-angle-right"></IconInfo>
            <NavLink to="/address">
              <TitleInfo>Blog</TitleInfo>
            </NavLink>
          </InfoBreadcrumbs>
        </div>
      </div>
    </Breadcrumbs>
  );
}

