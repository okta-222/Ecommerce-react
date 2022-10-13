import styled from "@emotion/styled";

export const ListSection = styled("div")`
  label: ListSection;
  margin-bottom: 12rem;
  text-transform: capitalize;
`;
export const ListWrapper = styled("div")`
  label: ListWrapper;
  margin-top: 3rem;
`;
export const RowCard = styled("div")`
  label: RowCard;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  text-transform: capitalize;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background: #ddd;
    bottom: -8px;
    left: 0;
  }
`;

export const CardLeft = styled("div")`
  label: CardLeft;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardRight = styled("div")`
  label: CardRight;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5rem;
  width: 50%;
`;

export const WashCard = styled("div")`
  label: WashCard;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: 2rem;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background: #ddd;
    bottom: -8px;
    left: 0;
  }
`;
export const SideLeftCard = styled("div")`
  label: SideLeftCard;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;
export const ImageCard = styled("img")`
  label: ImageCard;
  width: 100px;
`;

export const SideRightCard = styled("div")`
  label: SideRightCard;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`;
export const TitleSideRight = styled("h4")`
  label: TitleSideRight;
  color: #a1cee1;
`;

export const InfoBox = styled("div")`
  label: InfoBox;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ParagraphSideRight = styled("p")`
  label: ParagraphSideRight;
  font-size: 13px;
`;
export const ButtonSideRight = styled("button")`
  label: ButtonSideRight;
  border-radius: 35px;
  margin-top: -1px;
  width: 130px;
  text-transform: capitalize;
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
