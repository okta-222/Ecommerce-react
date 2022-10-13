import styled from "@emotion/styled";

export const HeaderSection = styled("div")`
  label: HeaderSection;
  background: #ffffff;
  position: relative;
`;
export const TopHeader = styled("div")`
  label: TopHeader;
  height: 40px;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const Container = styled("div")`
  label: container;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 97%;
    height: 1px;
    background-color: rgb(238, 238, 238);
    bottom: -5px;
    right: 15px;
  }
`;
export const WrapperTopHeader = styled("div")`
  label: WrapperTopHeader;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TopLeft = styled("div")`
  label: TopLeft;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpanTop = styled("span")`
  label: SpanTop;
  color: var(--btn-color);
  cursor: pointer;
`;
export const ParagraphTop = styled("p")`
  label: ParagraphTop;
  color: black;
  font-weight: bold;
  margin-left: 3px;
`;

export const Navbar = styled("div")`
  label: Navbar;
  min-height: 70px;
`;

export const ContainerNavbar = styled("div")`
  label: ContainerNavbar;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const TopRight = styled("div")`
  label: TopRight;
  padding: 0.2px;
`;

export const TopRightIcon = styled("div")`
  label: TopRightIcon;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const IconLangue = styled("div")`
  label: IconLangue;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 1px;
    height: 15px;
    background-color: rgb(190, 190, 190);
    top: 5px;
    right: -10px;
  }
`;

export const IconPlace = styled("div")`
  label: IconPlace;
  position: relative;
  padding: 0.1px;
`;
export const IconSocial = styled("div")`
  label: IconSocial;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  cursor: pointer;
`;
export const SelectIcon = styled("select")`
  label: SelectIcon;
  border: none;
`;

export const IconLanguge = styled("i")`
  label: IconLanguge;
  color: rgb(204, 51, 51);
  cursor: pointer;
  font-size: 15px;
`;

export const IconSocialHeart = styled("i")`
  label: IconSocialHeart;
  &:hover {
    color: var(--btn-color);
  }
`;

export const NavLogo = styled("span")`
  label: NavLogo;
  font-weight: 700;
  font-size: 21px;
  margin: 15px 0px;
  color: #000000;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding-right: 30px;
`;

export const SpanOne = styled("span")`
  label: SpanOne;
  color: black;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const IconSpanOne = styled("i")`
  label: IconSpanOne;
  color: var(--btn-color);
`;
export const FormFields = styled("div")`
  label: FormFields;
  margin-left: 72px;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const SearchBar = styled("div")`
  label: SearchBar;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 200px;
  background: rgb(218, 218, 218);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 60px;
  padding: 5px 5px;
`;
export const InputBar = styled("input")`
  label: InputBar;
  width: 110%;
  height: 2.4rem;
  background: #f5f5f5;
  outline: none;
  border: none;
  border-radius: 1.625rem;
  padding: 0 3.5rem 0 0.5rem;
  font-size: 1rem;
  background: transparent;
  flex: 1;
  border: 0;
  outline: none;
  color: #02011a;
`;
export const ButtonBar = styled("button")`
  label: ButtonBar;
  border-radius: 50%;
  border: 0;
  height: 20px;
  width: 30px;
  background: var(--btn-color);
  color: #fff;
  cursor: pointer;
`;
export const IconBar = styled("i")`
  label: IconBar;
  width: 15px;
`;

export const LinkNav = styled("a")`
  label: LinkNav;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  background: rgb(255, 255, 255);
  padding: 1rem;
  &:hover {
    opacity: 1;
    color: var(--btn-color);
    transition: all 0.45s;
    &::before {
      width: 100%;
    }
  }
  @media (max-width: 700px) {
    &::before {
      background: transparent;
    }
  }
`;

export const NavToggle = styled("div")`
  label: NavToggle;
  display: none;
  @media (max-width: 700px) {
    display: flex;
          width: 50px;
          height: 50px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
  }
  &.open {
        > .Bar {
          transform: translateX(-40px);
          background: transparent;
          &::before {
            width: 32px;
            transform: rotate(45deg) translate(26px, -26px);
          }
          &::after {
            transform: rotate(-45deg) translate(26px, 26px);
          }
        }
      }
`;

export const NavItem = styled("div")`
  label: NavItem;
  @media (max-width: 700px) {
    position: absolute;
    top: 60px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    left: 0;
    width: 100%;
    height: 90%;
    transform: translateX(-100%);
    transition: all 0.45s;
    z-index: 999;
    text-align: center;
  > &.open {
          transform: translateX(0);
        }
      }
`;

export const Bar = styled("div")`
  label: Bar;
  @media (max-width: 700px) {
    position: absolute;
    position: relative;
          width: 32px;
          height: 2px;
          background: #000000;
          transition: all 0.45s ease-in-out;
          &::before {
            content: "";
            position: absolute;
            height: 2px;
            background: #000000;
            border-radius: 2px;
            transition: all 0.45s ease-in-out;
            width: 25px;
            transform: translateY(-8px);
            right: 0;
          }
          &::after {
            content: "";
            position: absolute;
            height: 2px;
            background: #000000;
            border-radius: 2px;
            transition: all 0.45s ease-in-out;
            width: 32px;
            transform: translateY(8px);
          }
        }

`;