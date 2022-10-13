import styled from "@emotion/styled";

export const InformationSection = styled("div")`
  label: InformationSection;
  margin-bottom: 6rem;
`;
export const InformationWrapper = styled("div")`
  label: InformationWrapper;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.2rem;
  margin-top: 2rem;
  text-transform: capitalize;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.274);
  background-color: white;
  border-radius: 6px;
  padding: 2rem;
  padding-bottom: 3.5rem;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
export const CardInformationLeft = styled("div")`
  label: CardInformationLeft;
  width: 50%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const TitleCardLeft = styled("h2")`
  label: TitleCardLeft;
  font-size: 1.7rem;
  margin-bottom: 0.8rem;
`;
export const CardInformation = styled("div")`
  label: CardInformation;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.8rem;
  position: relative;
  transition: var(--main-transition);
  cursor: pointer;
  &:hover {
    background-color: #f4f7ec;
    border-radius: 2rem;
  }
`;
export const TextCard = styled("div")`
  label: TextCard;
  width: 60%;
`;
export const TitleTxt = styled("h3")`
  label: TitleTxt;
  font-size: 1.3rem;
`;
export const ParagraphTxt = styled("p")`
  label: ParagraphTxt;
  font-size: 0.8rem;
  color: rgb(107, 107, 107);
`;
export const IconCard = styled("i")`
  label: IconCard;
  position: relative;
  background: var(--btn-color);
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
  color: white;
`;
export const CardInformationRight = styled("div")`
  label: CardInformationRight;
  width: 48%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const InputCard = styled("input")`
  label: InputCard;
  padding: 0px 10px;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  background-color: #ddd;
  color: var(--white-color);
  outline: none;
  border: none;
  margin-top: 20px;
  margin-bottom: 15px;
  margin-right: 0.5rem;

  @media (max-width: 511px) {
    width: 100%;
  }
`;
export const SelectInformation = styled("div")`
  label: SelectInformation;
  margin-bottom: 1rem;
`;
export const SelectCard = styled("select")`
  label: SelectCard;
  border: 1px solid #ddd;
  width: 98%;
  background-color: #ddd;
  height: 42px;
  color: rgb(116, 114, 114);
  margin-top: 1rem;
`;
export const Textarea = styled("textarea")`
  label: Textarea;
  width: 98%;
  margin-top: 1rem;
  background-color: #ddd;
  height: 9rem;
  color: rgb(116, 114, 114);
  border: 1px solid #ddd;
  padding: 0.5rem;
`;
export const Button = styled("button")`
  label: Button;
  width: 49%;
  margin-top: 1rem;
  background-color: var(--btn-color);
  height: 3rem;
  color: rgb(255, 255, 255);
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 0.3rem;
  outline: none;
  cursor: pointer;
`;
