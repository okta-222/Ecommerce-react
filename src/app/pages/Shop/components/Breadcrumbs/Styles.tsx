import styled from "@emotion/styled";

export const Breadcrumb = styled("div")`
  label: Breadcrumbs;
  background-color: #f6f6f6;
  padding-top: var(--main-padding-top);
  padding-bottom: var(--main-padding-bottom);
  position: relative;
`;

export const Title = styled("h2")`
  label: Title;
  font-size: 1.8rem;
  font-weight: normal;
`;

export const InfoBreadcrumbs = styled("div")`
  label: InfoBreadcrumbs;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TitleInfo = styled("h4")`
  label: TitleInfo;
  font-size: 0.8rem;
  color: var(--text-color);
`;

export const IconInfo = styled("i")`
  label: IconInfo;
  color: var(--text-color);
`;
