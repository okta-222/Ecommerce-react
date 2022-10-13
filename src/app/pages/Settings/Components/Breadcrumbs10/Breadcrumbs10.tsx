import React from "react";
import {
  Breadcrumbs,
  Title,
  InfoBreadcrumbs,
  TitleInfo,
  IconInfo,
} from "./Styles";
import { NavLink } from "react-router-dom";

export default function Breadcrumbs10() {
  return (
    <Breadcrumbs>
      <div className="container">
        <div>
          <Title>Settings</Title>
          <InfoBreadcrumbs>
            <NavLink to="/">
              <TitleInfo>Home</TitleInfo>
            </NavLink>
            <IconInfo className="fa-solid fa-angle-right"></IconInfo>
            <NavLink to="/settings">
              <TitleInfo>Settings</TitleInfo>
            </NavLink>
          </InfoBreadcrumbs>
        </div>
      </div>
    </Breadcrumbs>
  );
}
