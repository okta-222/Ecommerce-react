import styled from "@emotion/styled";

export const BannerSection = styled("div")`
  label: BannerSection;
  padding-top: 3rem;
  padding-bottom: var(--main-padding-bottom);
  position: relative;
  text-align: center;
`;
export const BannerWrapper = styled("div")`
  label: BannerWrapper;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: 666px) {
    justify-content: center;
  }
`;

export const Card = styled("div")`
  label: Card;
  border-radius: 6px;
  overflow: hidden;
  transition: transform var(--main-transition),
    box-shadow var(--main-transition);
  text-align: left;
  position: relative;
`;
export const ImgCard = styled("div")`
  label: ImgCard;
  overflow: hidden;
`;
export const IconCard = styled("div")`
  label: IconCard;
  position: absolute;
  left: -100px;
  top: 2rem;
  display: flex;
  flex-direction: column;
  z-index: 999;
  transition: var(--main-transition);
`;
export const TextCard = styled("div")`
  label: TextCard;
  border-radius: 6px;
  overflow: hidden;
  transition: transform var(--main-transition),
    box-shadow var(--main-transition);
  text-align: left;
  position: relative;
  padding: 10px;
`;
export const Image = styled("img")`
  label: Image;
  width: 300px;
  max-width: 300px;
`;
export const SpanCard = styled("span")`
  label: SpanCard;
  display: grid;
  place-content: center;
  width: 35px;
  height: 35px;
  background-color: rgb(255, 255, 255);
  color: var(--btn-color);
  border-radius: 50%;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: rgb(255, 255, 255);
    background-color: var(--btn-color);
  }
`;
export const ParagraphCard = styled("p")`
  label: ParagraphCard;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: bold;
`;
export const DelCard = styled("del")`
  label: DelCard;
  color: red;
  font-weight: normal;
`;

export const IconCrdArrow = styled("i")`
  label: IconCrdArrow;
  padding: 1px;
`;
