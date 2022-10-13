import styled from "@emotion/styled";

export const ResultSection = styled("div")`
  label: ResultSection;
  background-color: #f4f3e9;
  padding-top: var(--main-padding-top);
  padding-bottom: var(--main-padding-bottom);
  position: relative;
`;

export const Container = styled("div")`
  label: container;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ResultBox = styled("div")`
  label: ResultBox;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const Image = styled("img")`
  label: Image;
  width: 70px;
  height: 60px;
`;
export const ParagraphTitle = styled("p")`
  label: ParagraphTitle;
  text-transform: capitalize;
  color: #777;
  font-size: 18px;
`;
