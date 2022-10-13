

import React from "react";
import {
  Breadcrumbs, 
  Title,
  InfoBreadcrumbs,
  TitleInfo,
  IconInfo,
} from "./Styles";
import { NavLink } from "react-router-dom";

export default function Breadcrumbs2() {
  return (
    <Breadcrumbs>
      <div className="container">
        <div>
          <Title>Category</Title>
          <InfoBreadcrumbs>
            <NavLink to="/">
              <TitleInfo>Home</TitleInfo>
            </NavLink>
            <IconInfo className="fa-solid fa-angle-right"></IconInfo>
            <NavLink to="/address">
              <TitleInfo>Category</TitleInfo>
            </NavLink>
          </InfoBreadcrumbs>
        </div>
      </div>
    </Breadcrumbs>
  );
}

