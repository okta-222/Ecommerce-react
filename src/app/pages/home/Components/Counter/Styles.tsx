import styled from "@emotion/styled";

export const CounterSection = styled("div")`
  label: CounterSection;
  padding-top: var(--main-padding-top);
  padding-bottom: var(--main-padding-bottom);
  position: relative;
  background-color: #f9f8f6;
  @media (max-width: 744px) {
    justify-content: center;
    display: flex;
  }
`;
export const CounterWrapper = styled("div")`
  label: CounterWrapper;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const ImgCounter = styled("div")`
  label: ImgCounter;
  position: relative;
  overflow: hidden;
`;
export const TextCounter = styled("div")`
  label: TextCounter;
  flex: 1;
`;
export const ImageCount = styled("img")`
  label: ImageCount;
  max-width: 450px;
  @media (max-width: 744px) {
    display: none;
  }
`;
export const SpanCounter = styled("span")`
  label: SpanCounter;
  color: #76a713;
`;

export const BrandText = styled("div")`
  label: BrandText;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 10px;
  text-transform: uppercase;
`;
export const ParagraphText = styled("p")`
  label: ParagraphText;
  color: rgb(122, 122, 122);
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 13px;
`;
export const WeightText = styled("div")`
  label: WeightText;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 20px;
  text-transform: uppercase;
`;
export const CartText = styled("div")`
  label: CartText;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const IconText = styled("i")`
  label: IconText;
  color: #76a713;
  border: 1px solid #ddd;
  padding: 2px 2px;
`;
export const TitleTextFive = styled("h5")`
  label: TitleTextFive;
  border: 1px solid #ddd;
  padding: 1px 3px;
  background-color: #fff;
  font-size: 13px;
  font-weight: normal;
`;
export const ButtonOne = styled("button")`
  label: ButtonOne;
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
  width: 30px;
  height: 32px;
  background-color: #fff;
  border: 1px solid #ddd;
`;
export const ButtonTwo = styled("button")`
  label: ButtonTwo;
  display: flex;
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
  justify-content: center;
  align-items: center;
  height: 34px;
`;

export const BtnCount = styled("div")`
  label: BtnCount;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

export const ButnCounter = styled("button")`
  label: ButnCounter;
  width: 30px;
  height: 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
`;
