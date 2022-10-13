import styled from "@emotion/styled";

export const CounterSection = styled("div")`
  label: CounterSection;
  background-color: #ffffff;
  padding-top: var(--main-padding-top);
  padding-bottom: var(--main-padding-bottom);
  position: relative;
`;

export const CounterWrapper = styled("div")`
  label: CounterWrapper;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;
export const SideLeft = styled("div")`
  label: SideLeft;
  width: 40%;
  overflow: hidden;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const SliderWrapper = styled("div")`
  label: SliderWrapper;
  overflow: hidden;
`;
export const SideRight = styled("div")`
  label: SideRight;
  width: 55%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const TextRight = styled("div")`
  label: TextRight;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;
export const RateRight = styled("div")`
  label: RateRight;
  color: #ff9436;
`;
export const LoremRight = styled("div")`
  label: LoremRight;
  color: var(--text-color);
  font-size: 13px;
`;
export const ColorRight = styled("div")`
  label: ColorRight;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.2rem;
  color: rgb(104, 104, 104);
`;
export const CartRight = styled("div")`
  label: CartRight;
  display: flex;
  align-items: center;
`;
export const Button = styled("button")`
  label: Button;
  width: 100%;
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
`;
export const CountCard = styled("div")`
  label: CountCard;
  width: 100%;
  height: 350px;
  margin-top: 70px;
  border-radius: 6px;
  overflow: hidden;
  transition: transform var(--main-transition),
    box-shadow var(--main-transition);
`;
export const Image = styled("img")`
  label: Image;
  width: 100%;
  max-width: 100%;
`;
export const ParagraphRight = styled("p")`
  label: ParagraphRight;
  width: 100%;
  max-width: 100%;
`;
export const IconFilled = styled("i")`
  label: IconFilled;
  font-size: 10px;
`;
export const IconFar = styled("i")`
  label: IconFar;
  font-size: 10px;
  color: var(--text-color);
`;
export const SpanRate = styled("span")`
  label: SpanRate;
  color: var(--text-color);
`;
export const TitleColor = styled("h4")`
  label: TitleColor;
  margin-right: 7px;
`;
export const IconOne = styled("i")`
  label: IconOne;
  font-size: 9px;
  color: #ff9436;
`;
export const IconTwo = styled("i")`
  label: IconTwo;
  font-size: 9px;
  color: #33d220;
`;
export const IconThree = styled("i")`
  label: IconThree;
  font-size: 9px;
  color: #e247ff;
`;
export const IconFour = styled("i")`
  label: IconFour;
  font-size: 9px;
  color: #27cbff;
`;
export const TitleText = styled("h4")`
  label: TitleText;
  color: rgb(104, 104, 104);
`;
export const SpanText = styled("span")`
  label: SpanText;
  color: var(--text-color);
  font-size: 15px;
  font-weight: normal;
  margin-left: 7px;
`;
export const TitleTextIcon = styled("h4")`
  label: TitleTextIcon;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const IconSpanText = styled("i")`
  label: IconSpanText;
  margin: 10px;
  transition: var(--main-transition);
  &:hover {
    color: #0a9a73;
    cursor: pointer;
  }
`;
