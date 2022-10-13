import styled from "@emotion/styled";

export const EmployeesWrapper = styled("div")`
  label: EmployeesWrapper;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.2rem;
  margin-top: 2rem;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const SideLeft = styled("div")`
  label: SideLeft;
  width: 54%;
  margin-bottom: 5rem;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const CardEmployee = styled("div")`
  label: CardEmployee;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.158);
  background-color: white;
  height: 500px;
`;

export const Image = styled("img")`
  label: Image;
  width: 100%;
  max-width: 100%;
`;

export const TextCard = styled("div")`
  label: TextCard;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.158);
  width: 80%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  top: -4rem;
  left: 10%;
  padding: 0.2rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
`;

export const TitleOne = styled("h5")`
  label: TitleOne;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.3rem;
`;
export const IconCard = styled("i")`
  label: IconCard;
  color: var(--btn-color);
`;
export const TitleTwo = styled("h2")`
  label: TitleTwo;
  transition: var(--main-transition);
  &:hover {
    color: var(--btn-color);
  }
`;
export const SpanCard = styled("span")`
  label: SpanCard;
  font-size: 0.7rem;
  color: var(--text-color);
`;
export const Description = styled("p")`
  label: Description;
  font-size: 0.9rem;
  text-align: left;
  transition: var(--main-transition);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
  &:hover {
    color: var(--btn-color);
  }
`;
export const IconCard2 = styled("i")`
  label: IconCard2;
  font-size: 0.8rem;
`;
export const SideRight = styled("div")`
  label: SideRight;
  width: 38%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const CardOne = styled("div")`
  label: CardOne;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
  border-radius: 6px;
  position: relative;
  margin-bottom: 1rem;
`;
export const ImageCardOne = styled("img")`
  label: ImageCardOne;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0.6rem;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 5px solid rgb(255, 255, 255);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
`;
export const TextCardOne = styled("div")`
  label: TextCardOne;
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const HeadCardOne = styled("h2")`
  label: HeadCardOne;
  text-transform: capitalize;
`;
export const HeadCardTwo = styled("h5")`
  label: HeadCardTwo;
  text-transform: capitalize;
  color: rgb(148, 148, 148);
`;
export const RateIconOne = styled("i")`
  label: RateIconOne;
  color: #ff9436;
`;
export const RateIconOneFar = styled("i")`
  label: RateIconOneFar;
  color: rgb(63, 63, 63);
`;
export const RateSpanOne = styled("span")`
  label: RateSpanOne;
  text-transform: capitalize;
`;
export const ParagraphCardOne = styled("p")`
  label: ParagraphCardOne;
  text-transform: capitalize;
  color: rgb(148, 148, 148);
  text-align: center;
`;
export const IconCardOne = styled("i")`
  label: IconCardOne;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.8rem;
`;
export const IconHover = styled("i")`
  label: IconHover;
  position: relative;
  background: rgb(255, 255, 255);
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  padding: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
  cursor: pointer;
  transition: var(--main-transition);
  &:hover {
    background-color: var(--btn-color);
    color: white;
  }
`;
export const CardTwo = styled("div")`
  label: CardTwo;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
  border-radius: 6px;
  position: relative;
  margin-bottom: 1rem;
`;

export const TitleCardTwo = styled("h3")`
  label: TitleCardTwo;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    bottom: -0.3rem;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export const FormCardTwo = styled("div")`
  label: FormCardTwo;
  margin-top: 1.5rem;
`;
export const SearchCardTwo = styled("div")`
  label: SearchCardTwo;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const InputCardTwo = styled("input")`
  label: InputCardTwo;
  width: 145%;
  height: 2.4rem;
  background: #f5f5f5;
  color: #b9b9b9;
  outline: none;
  border: none;
  border-radius: 0.25rem;
  padding: 0 0.5rem 0 0.5rem;
  font-size: 1rem;
  font-size: 12px;
`;
export const ButtonCardTwo = styled("button")`
  label: ButtonCardTwo;
  width: 6.5rem;
  height: 2.1rem;
  margin-left: -4.7rem;
  background: var(--btn-color);
  color: #ffffff;
  border: none;
  outline: none;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;
export const IconCardTwo = styled("i")`
  label: IconCardTwo;
  width: 15px;
`;

export const CardThree = styled("div")`
  label: CardThree;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
  border-radius: 6px;
  position: relative;
  margin-bottom: 1rem;
`;
export const TitleCardThree = styled("h3")`
  label: TitleCardThree;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    bottom: -0.3rem;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export const ListCardThree = styled("ul")`
  label: ListCardThree;
  margin-top: 1.5rem;
`;
export const ItemCardThree = styled("li")`
  label: ItemCardThree;
  background-color: #f2f6e8;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  transition: var(--main-transition);

  &:hover {
    background-color: var(--btn-color);
    color: #fff;
  }
`;

export const CardFour = styled("div")`
  label: CardFour;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.432);
  background-color: white;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 92%;
    height: 1px;
    top: 3rem;
    left: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export const TitleCardFour = styled("h3")`
  label: TitleCardFour;
  margin-bottom: 1.5rem;
`;

export const EmployeeCardFour = styled("div")`
  label: EmployeeCardFour;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 767px) {
    align-items: center;
  }
`;
export const ImageCardFour = styled("img")`
  label: ImageCardFour;
  width: 30%;
  max-width: 30%;
  border: 4px solid rgb(255, 255, 255);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.432);
`;
export const InfoCardFour = styled("div")`
  label: InfoCardFour;
  width: 60%;
  margin-bottom: 1rem;
`;
export const SpanCardFour = styled("span")`
  label: SpanCardFour;
  font-size: 0.7rem;
  font-weight: normal;
  color: var(--btn-color);
`;

export const TitleEmployeeCardFour = styled("h5")`
  label: TitleEmployeeCardFour;
  font-size: 0.7rem;
  font-weight: bold;
  transition: var(--main-transition);
  cursor: pointer;

  &:hover {
    color: var(--btn-color);
  }
`;

export const CardFive = styled("div")`
  label: TextCard;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
  border-radius: 6px;
  position: relative;
  margin-bottom: 1rem;
`;

export const TitleCardFive = styled("h3")`
  label: TitleCardFive;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    bottom: -0.3rem;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export const IconCardFive = styled("div")`
  label: IconCardFive;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
  position: relative;
`;
export const IconCardHover = styled("div")`
  label: IconCardHover;
  position: relative;
  background: rgb(255, 255, 255);
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  padding: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
  cursor: pointer;
  transition: var(--main-transition);
  &:hover {
    background-color: var(--btn-color);
    color: white;
  }
`;

export const CardSix = styled("div")`
  label: CardSix;
  padding-top: 2rem;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
  border-radius: 6px;
  position: relative;
  margin-bottom: 1rem;
  text-align: center;
`;
export const TitleCardSix = styled("h3")`
  label: TitleCardSix;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    bottom: -0.3rem;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export const ListCardSix = styled("ul")`
  label: ListCardSix;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.2rem;
`;
export const ItemCardSix = styled("li")`
  label: ItemCardSix;
  border: 1px solid var(--btn-color);
  border-radius: 2rem;
  color: var(--btn-color);
  transition: var(--main-transition);
  &:hover {
    background-color: var(--btn-color);
    color: #fff;
  }
`;
