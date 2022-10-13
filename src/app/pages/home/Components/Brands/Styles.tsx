import styled from "@emotion/styled";

export const BrandSection = styled("div")`
  label: BrandSection;
  height: 400px;
  background-color: white;
  padding-top: var(--main-padding-top);
  padding-bottom: var(--main-padding-bottom);
  position: relative;
`;
export const BrandsWrapper = styled("div")`
  label: BrandsWrapper;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 97%;
    height: 1px;
    background-color: rgb(238, 238, 238);
    right: 15px;
    bottom: -15px;
  }
`;
export const Brand = styled("div")`
  label: Brand;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  text-align: center;
`;

export const BrandCard = styled("div")`
  label: BrandCard;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: var(--main-transition);
  cursor: pointer;
  margin-bottom: 50px;
  &:hover {
    TitleBrandCard {
      color: var(--btn-color);
      transition: var(--main-transition);
    }
  }
`;
export const ImageBrandCard = styled("img")`
  label: ImageBrandCard;
  max-width: 100px;
`;
export const TitleBrandCard = styled("h3")`
  label: TitleBrandCard;
  color: #000;
  &:hover {
    color: var(--btn-color);
  }
`;
