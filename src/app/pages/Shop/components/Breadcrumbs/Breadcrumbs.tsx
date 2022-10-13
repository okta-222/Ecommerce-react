import React from "react";
import {
  Breadcrumb,
  Title,
  InfoBreadcrumbs,
  TitleInfo,
  IconInfo,
} from "./Styles";
import { NavLink } from "react-router-dom";

export default function Breadcrumbs() {
  return (
    <Breadcrumb>
      <div className="container">
        <div>
          <Title>Single Shop</Title>
          <InfoBreadcrumbs>
            <NavLink to="/">
              <TitleInfo>Home</TitleInfo>
            </NavLink>
            <IconInfo className="fa-solid fa-angle-right"></IconInfo>
            <TitleInfo>Single Shop</TitleInfo>
          </InfoBreadcrumbs>
        </div>
      </div>
    </Breadcrumb>
  );
}
