import styled from "@emotion/styled";

export const GenuineSection = styled("div")`
  label: GenuineSection;
  position: relative;
  background-color: rgb(233, 233, 233);
`;

export const Container = styled("div")`
  label: container;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const GenuineImg = styled("div")`
  label: GenuineImg;
  position: relative;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const Image = styled("img")`
  label: Image;
  width: 450px;
  max-width: 100%;
`;

export const GenuineTxt = styled("div")`
  label: GenuineTxt;
  flex: 1;
  @media (max-width: 732px) {
    text-align: center;
  }
`;

export const ParagraphGenuine = styled("p")`
  label: ParagraphGenuine;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
  color: rgb(0, 0, 0);
  @media (max-width: 732px) {
    margin: 10px auto;
  }
  @media (max-width: 777px) {
    max-width: 300px;
  }
`;
export const TitleGenuine = styled("h2")`
  label: TitleGenuine;
  color: rgb(0, 0, 0);
  font-size: 48px;
`;
export const ButtGenuine = styled("div")`
  label: ButtGenuine;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 732px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const IconeGenuine = styled("i")`
  label: IconeGenuine;
  color: var(--btn-color);
`;

export const ButtonOne = styled("button")`
  label: ButtonOne;
  background-color: transparent;
  height: 40px;
  color: rgb(255, 255, 255);
  margin-top: 5px;
  background-color: var(--btn-color);
  font-size: 14px;
  width: 180px;
  @media (max-width: 732px) {
    margin: 10px auto;
  }
`;
export const ButtonTwo = styled("button")`
  label: ButtonTwo;
  background-color: transparent;
  height: 40px;
  color: rgb(255, 255, 255);
  margin-top: 5px;
  background-color: rgb(255, 255, 255);
  color: var(--btn-color);
  font-size: 14px;
  width: 180px;
  @media (max-width: 732px) {
    margin: 10px auto;
  }
`;
