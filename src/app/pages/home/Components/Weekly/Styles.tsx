import styled from "@emotion/styled";

export const WeeklySection = styled("div")`
  label: WeeklySection;
  padding-top: var(--main-padding-top);
  padding-bottom: var(--main-padding-bottom);
  position: relative;
  text-align: center;
  background-color: rgb(182, 182, 182);
  height: 400px;
  margin-bottom: 2rem;
`;

export const HeadTitle = styled("h2")`
  label: HeadTitle;
  text-align: center;
  color: #fff;
  font-size: 34px;
`;

export const ParagaraphTitle = styled("p")`
  label: ParagaraphTitle;
  text-align: center;
  color: #fff;
  font-size: 12px;
`;
export const ButtonWeeklyLeft = styled("button")`
  label: ButtonWeeklyLeft;
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
  background-color: var(--btn-color);
  margin-right: 0px;
  border-radius: 20px 0px 0px 20px;
  color: white;
  border-radius: 50%;
  width: 100px;
`;
export const ButtonWeeklyRight = styled("button")`
  label: ButtonWeeklyRight;
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
  background-color: #fff;
  color: black;
  margin-right: 0px;
  border-radius: 0px 20px 20px 0px;
  border-radius: 50%;
  width: 100px;
`;
export const SlideCard = styled("div")`
  label: SlideCard;
  width: 300px;
  height: 320px;
  margin: auto;
  margin-top: 2px;
  box-shadow: inset 0px 1px 4px rgb(0 0 0 / 23%);
  background-color: rgb(255, 255, 255);
  border-radius: 6px;
  overflow: hidden;
  transition: transform var(--main-transition),
    box-shadow var(--main-transition);
  position: relative;
`;
export const IconBox = styled("div")`
  label: IconBox;
  position: absolute;
  left: -150px;
  top: rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 999;
  transition: var(--main-transition);
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
export const ImageCard = styled("img")`
  label: ImageCard;
  width: 98%;
  max-width: 100%;
  padding: 5px;
`;

export const RateCard = styled("div")`
  label: RateCard;
  text-align: center;
  color: rgb(0, 0, 0);
`;
export const FilledRate = styled("i")`
  label: FilledRate;
  color: #ffc107;
`;
export const HeadTitleCard = styled("h3")`
  label: HeadTitleCard;
  text-align: center;
`;
export const ParagraphCard = styled("p")`
  label: ParagraphCard;
  margin: 10px 0 0;
  line-height: 1.5;
  color: rgb(41, 41, 41);
  text-align: center;
`;

