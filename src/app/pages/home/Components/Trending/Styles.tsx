import styled from "@emotion/styled";

export const TrendingSection = styled("div")`
  label: TrendingSection;
  text-align: center;
  padding-top: var(--main-padding-top);
  padding-bottom: var(--main-padding-bottom);
  margin-top: 170px;
`;

export const TrendingWrapper = styled("div")`
  label: TrendingWrapper;
  text-transform: capitalize;
`;

export const TrendingWrapperTop = styled("div")`
  label: TrendingWrapperTop;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
`;
export const TrendingWrapperBottom = styled("div")`
  label: TrendingWrapperBottom;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;
export const BoxBottomLeft = styled("div")`
  label: BoxBottomLeft;
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  text-align: left;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const SideLeft = styled("div")`
  label: SideLeft;
  background-image: url("../../../../../shared/assets/images/or2.avif");
  background-size: cover;
  background-repeat: no-repeat;
  width: 50%;
  padding: 3rem 2rem;
  height: 280px;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const ParagraphSideLeft = styled("p")`
  label: ParagraphSideLeft;
  color: #affa17;
  font-weight: bold;
`;
export const TitleSideLeft = styled("h3")`
  label: TitleSideLeft;
  color: rgb(255, 255, 255);
  font-size: 22px;
`;
export const ButtonSideLeft = styled("button")`
  label: ButtonSideLeft;
  padding: 0px 10px;
  border-radius: 2px;
  width: 170px;
  height: 32px;
  background-color: var(--btn-color);
  color: var(--white-color);
  outline: none;
  border: none;
  margin-top: 20px;
  margin-bottom: 15px;
  cursor: pointer;
  text-align: center;
  background-color: transparent;
  border: 1px solid #affa17;
  color: #affa17;
  width: 100px;
`;
export const SideRight = styled("div")`
  label: SideRight;
  background-image: url("../../../../../shared/assets/images/or2.avif");
  background-size: cover;
  background-repeat: no-repeat;
  width: 50%;
  padding: 3rem 2rem;
  height: 280px;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const ParagraphSideRight = styled("p")`
  label: ParagraphSideRight;
  color: #affa17;
  font-weight: bold;
  text-align: left;
`;
export const TitleSideRight = styled("h3")`
  label: TitleSideRight;
  color: rgb(255, 255, 255);
  font-size: 22px;
`;
export const ButtonSideRight = styled("button")`
  label: ButtonSideRight;
  text-align: center;
  background-color: transparent;
  border: 1px solid #affa17;
  color: #affa17;
  width: 100px;
`;
export const Box = styled("div")`
  label: Box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;
export const ImageBox = styled("img")`
  label: ImageBox;
  width: 48%;
`;
export const InfoBox = styled("div")`
  label: InfoBox;
  width: 48%;
  text-align: left;
  cursor: pointer;
`;
export const ParagraphBox = styled("p")`
  label: ParagraphBox;
  color: #000000;
  font-size: 10px;
  text-align: left;
`;
export const TitleBoxTop = styled("h5")`
  label: TitleBoxTop;
  color: black;
  font-size: 11px;
  transition: var(--main-transition);
  font-weight: bold;
`;
export const BoxBottomRight = styled("div")`
  label: BoxBottomRight;
  cursor: pointer;
`;
