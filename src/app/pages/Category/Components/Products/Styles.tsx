import styled from "@emotion/styled";

export const ProductsWrapper = styled("div")`
  label: ProductsWrapper;
  padding-top: var(--main-padding-top);
  padding-bottom: var(--main-padding-bottom);
  position: relative;
  text-transform: capitalize;
`;
export const ProductsTop = styled("div")`
  label: ProductsTop;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const TextCategory = styled("div")`
  label: TextCategory;
  width: 30%;
`;
export const InputCategory = styled("div")`
  label: InputCategory;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    justify-content: space-between;
    width: 100%;
  }
`;
export const ParagraphCategory = styled("p")`
  label: ParagraphCategory;
  color: var(--text-color);
`;
export const IconCategoryOne = styled("div")`
  label: IconCategoryOne;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.4rem;
`;
export const IconCategoryTwo = styled("div")`
  label: IconCategoryTwo;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.4rem;
`;
export const SelectCategoryOne = styled("select")`
  label: SelectCategoryOne;
  border: 1px solid #ddd;
  padding: 0.4rem;
`;
export const ProductsBottom = styled("div")`
  label: ProductsBottom;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
export const MenuLeft = styled("div")`
  label: MenuLeft;
  width: 30%;
  box-shadow: 0 2px 15px rgb(0 0 0 / 10%);
  background-color: white;
  border-radius: 6px;
  padding: 1rem;
  padding-bottom: 4rem;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const BannerRight = styled("div")`
  label: BannerRight;
  width: 70%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const ListCheckBox = styled("ul")`
  label: ListCheckBox;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgb(231, 231, 231);
    bottom: -1.5rem;
    position: absolute;
    left: 0;
  }
`;
export const ItemList = styled("li")`
  label: ItemList;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;
export const LinkItem = styled("a")`
  label: LinkItem;
  color: var(--text-color);
`;
export const ProgressCard = styled("div")`
  label: ProgressCard;
  position: relative;
  padding-top: 3rem;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgb(231, 231, 231);
    bottom: -1.5rem;
    position: absolute;
    left: 0;
  }
`;

export const FilterCard = styled("div")`
  label: FilterCard;
  padding-top: 4rem;
  padding-bottom: 2rem;
`;
export const IconColor = styled("div")`
  label: IconColor;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export const LinkColorBlue = styled("i")`
  label: LinkColorBlue;
  font-size: 0.7rem;
  padding: 0.3rem;
  color: #3772ff;
`;
export const LinkColorOrange = styled("i")`
  label: LinkColorOrange;
  font-size: 0.7rem;
  padding: 0.3rem;
  color: #ff9436;
`;
export const LinkColorBrown = styled("i")`
  label: LinkColorBrown;
  font-size: 0.7rem;
  padding: 0.3rem;
  color: #8b4b12;
`;
export const LinkColorGreen = styled("i")`
  label: LinkColorGreen;
  font-size: 0.7rem;
  padding: 0.3rem;
  color: #249873;
`;
export const LinkColorPurple = styled("i")`
  label: LinkColorPurple;
  font-size: 0.7rem;
  padding: 0.3rem;
  color: #e247ff;
`;
export const LinkColorSky = styled("i")`
  label: LinkColorSky;
  font-size: 0.7rem;
  padding: 0.3rem;
  color: #27cbff;
`;
export const SpanColor = styled("span")`
  label: SpanColor;
  margin: 0.01rem;
  color: var(--text-color);
`;

export const TagsCard = styled("div")`
  label: TagsCard;
  padding-top: 2rem;
`;
export const ListTagCard = styled("ul")`
  label: ListTagCard;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.2rem;
  text-align: center;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
  }
`;
export const ItemTag = styled("li")`
  label: ItemTag;
  border: 1px solid var(--btn-color);
  border-radius: 2rem;
  color: var(--btn-color);
  transition: var(--main-transition);
  &:hover {
    background-color: var(--btn-color);
    color: #fff;
  }
`;

export const ProductCard = styled("div")`
  label: ProductCard;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.432);
  background-color: white;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 0.5rem;
`;
export const Image = styled("img")`
  label: Image;
  width: 200px;
`;

export const IconCard = styled("i")`
  label: IconCard;
  color: #333;
  transition: var(--main-transition);
  &:hover {
    color: #0a9a73;
    cursor: pointer;
  }
`;

export const InfoIconCard = styled("div")`
  label: InfoIconCard;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const TextInfoCard = styled("div")`
  label: TextInfoCard;
  color: var(--text-color);
  font-size: 13px;
  padding-bottom: 0.5rem;
`;

export const Del = styled("del")`
  label: Del;
  color: red;
`;

export const IconFilledCard = styled("i")`
  label: IconFilledCard;
  font-size: 12px;
  color: #ff9436;
`;
export const IconFarCard = styled("i")`
  label: IconFarCard;
  color: black;
  font-size: 12px;
`;

export const InfoLineCard = styled("div")`
  label: InfoLineCard;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
`;
