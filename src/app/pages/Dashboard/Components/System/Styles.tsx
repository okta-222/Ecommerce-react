import styled from "@emotion/styled";

export const SystemSection = styled("div")`
  label: SystemSection;
  margin-top: 2rem;
  margin-bottom: 6rem;
`;
export const SystemWrapper = styled("div")`
  label: SystemWrapper;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.2rem;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
export const SystemLeft = styled("div")`
  label: SystemLeft;
  width: 25%;
  text-transform: capitalize;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.274);
  background-color: white;
  border-radius: 6px;
  padding-bottom: 1rem;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const TitleSysLeft = styled("h2")`
  label: TitleSysLeft;
  padding: 2rem 0 1rem 1.5rem;
  font-weight: normal;
`;
export const CardSysLeft = styled("div")`
  label: CardSysLeft;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 1rem 0 1rem 1.5rem;
  transition: var(--main-transition);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: #20b30e;
    right: -100%;
    top: 0;
  }
  &:hover {
    background-color: #edf2ee;
    &::before {
      left: 0;
    }
  }
`;
export const TitleSysLeft2 = styled("h4")`
  label: TitleSysLeft2;
  font-size: 0.9rem;
`;
export const SystemRight = styled("div")`
  label: SystemRight;
  width: 73%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const SystemTopWrapper = styled("div")`
  label: SystemTopWrapper;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.9rem;
  text-transform: capitalize;
  @media (max-width: 452px) {
    flex-direction: column;
  }
`;

export const SystemBottomWrapper = styled("div")`
  label: SystemBottomWrapper;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
  border-radius: 6px;
  padding: 0 0 0 0.5rem;
`;

export const CardTopOne = styled("div")`
  label: CardTopOne;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
  border-radius: 6px;
  position: relative;
  margin-bottom: 1rem;
  width: 50%;
  height: 16rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 452px) {
    width: 100%;
  }
`;
export const ImageCardOne = styled("img")`
  label: ImageCardOne;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0.6rem;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 5px solid rgb(255, 255, 255);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
`;

export const TextCardOne = styled("img")`
  label: TextCardOne;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;
export const TitleCardOne = styled("img")`
  label: TitleCardOne;
  font-size: 1.2rem;
`;
export const CardTopTwo = styled("div")`
  label: CardTopTwo;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
  border-radius: 6px;
  position: relative;
  margin-bottom: 1rem;
  width: 50%;
  height: 16rem;
`;

export const TitleCardTwo1 = styled("h3")`
  label: TitleCardTwo1;
  font-size: 1rem;
  color: #777;
`;
export const TitleCardTwo2 = styled("h3")`
  label: TitleCardTwo2;
  font-size: 1rem;
`;
export const ParagraphCardTwo = styled("p")`
  label: ParagraphCardTwo;
  font-weight: normal;
  font-size: 0.7rem;
`;
export const ListSysBottom = styled("ul")`
  label: ListSysBottom;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  padding: 0.5rem;
  font-weight: bold;
`;
export const ItemSysBottom = styled("li")`
  label: ItemSysBottom;
  color: #20b30e;
  padding-right: 2rem;
`;
