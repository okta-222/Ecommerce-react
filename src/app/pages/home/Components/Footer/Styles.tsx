import styled from "@emotion/styled";

export const FooterSection = styled("div")`
  label: FooterSection;
  background-color: #0c1127;
  padding: 70px 0 0;
  position: relative;
`;

export const ResultWrapper = styled("div")`
  label: ResultWrapper;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: rgb(250, 250, 250);
  bottom: 110px;
  padding: 1rem 0.5rem;
`;
export const FooterWrapper = styled("div")`
  label: FooterWrapper;
  display: flex;
  gap: 2rem;
  align-items: baseline;
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;
export const CopyrightWrapper = styled("div")`
  label: CopyrightWrapper;
  padding: 1rem 2rem;
  text-align: center;
  color: rgb(172, 172, 172);
  margin: 50px 0 0;
  border-top: 1px solid #444;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #262b3f;
  font-size: 0.9rem;
`;

export const ResultCard = styled("div")`
  label: ResultCard;
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const Image = styled("img")`
  label: Image;
  width: 50px;
`;
export const TitleCard = styled("h3")`
  label: TitleCard;
  font-size: 20px;
  text-transform: capitalize;
`;
export const ParagraphCard = styled("p")`
  label: ParagraphCard;
  font-size: 12px;
  text-transform: capitalize;
`;

export const InfoCopyright = styled("div")`
  label: InfoCopyright;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const TitleCopyright = styled("h4")`
  label: TitleCopyright;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    right: -1rem;
    width: 1px;
    height: 1.3rem;
    background-color: #ffffff;
  }
`;
export const CardOne = styled("div")`
  label: CardOne;
  width: 30%;
  padding: 1rem;
  @media (max-width: 992px) {
    text-align: left;
    gap: 3rem;
    width: 50%;
  }
`;
export const CardTwo = styled("div")`
  label: CardTwo;
  width: 15%;
  padding: 1rem;
  @media (max-width: 992px) {
    text-align: left;
    gap: 3rem;
    width: 45%;
  }
`;
export const CardThree = styled("div")`
  label: CardThree;
  width: 35%;
  padding: 1rem;
  @media (max-width: 992px) {
    text-align: left;
    gap: 3rem;
    width: 50%;
  }
`;

export const TitleCardThree = styled("h3")`
  label: TitleCardThree;
  color: rgb(0, 0, 0);
  font-size: 14px;
`;

export const TitleCardFooter = styled("h5")`
  label: TitleCardFooter;
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
`;

export const Social = styled("ul")`
  label: Social;
  display: flex;
  margin-top: 20px;
  @media (max-width: 992px) {
    justify-content: left;
  }
`;

export const LinkSocial = styled("li")`
  label: LinkSocial;
  margin-right: 10px;
  text-transform: capitalize;
  @media (max-width: 992px) {
    margin: 0 auto;
  }
`;

export const TitleHeadFive = styled("h5")`
  label: TitleHeadFive;
  background-color: #ffffff;
  color: black;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: 20px;
  border-radius: 50%;
  transition: var(--main-transition);
  &:hover {
    background-color: var(--btn-color);
    color: #ffffff;
  }
`;

export const IconSocial = styled("i")`
  label: IconSocial;
  font-size: 14px;
`;

export const ParagraphFooter = styled("p")`
  label: ParagraphFooter;
  line-height: 2;
  color: #b9b9b9;
`;

export const Links = styled("ul")`
  label: Links;
  line-height: 2;
`;
export const ItemLinks = styled("li")`
  label: ItemLinks;
  color: #b9b9b9;
  transition: var(--main-transition);
  text-transform: capitalize;
  cursor: pointer;

  &::before {
    content: "";
    font-weight: 900;
    margin-right: 10px;
    color: var(--main-color);
  }
`;
export const TitleLink = styled("h5")`
  label: TitleLink;
  margin: 15px 0;
  transition: var(--main-transition);
  width: max-content;
`;

export const LineCard = styled("div")`
  label: LineCard;
  display: flex;
  align-items: baseline;
  color: #b9b9b9;
  margin-bottom: 30px;
  justify-content: space-between;
`;

export const IconLine = styled("i")`
  label: IconLine;
  font-size: 25px;
  margin-right: 10px;
  color: var(--btn-color);
`;

export const InfoLine = styled("div")`
  label: InfoLine;
  line-height: 1.7;
  flex: 1;
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
`;

export const FormSearch = styled("div")`
  label: FormSearch;
  width: 100%;
`;

export const SearchBar = styled("div")`
  label: SearchBar;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const InputBar = styled("input")`
  label: InputBar;
  width: 100%;
  height: 2.4rem;
  background: #f5f5f5;
  outline: none;
  border: 1px solid #ddd;
  padding: 0 3.5rem 0 0.5rem;
  font-size: 1rem;
`;
export const ButtonBar = styled("button")`
  label: ButtonBar;
  width: 4.5rem;
  height: 2.4rem;
  margin-left: -4.5rem;
  background: var(--btn-color);
  color: #fff;
  border: 1px solid var(--btn-color);
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
