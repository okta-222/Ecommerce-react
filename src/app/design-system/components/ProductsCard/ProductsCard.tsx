import { IconFarCard, IconFilledCard, Del, InfoLineCard, Image, ProductCard, TextInfoCard, InfoIconCard, IconCard } from "../../../pages/Category/Components/Products/Styles";
import { ProductsProps } from "../types";

export default function ProductsCard({ property }: ProductsProps) {
  const { img, title, price, discount, num } = property;
  return (
    <ProductCard>
      <Image src={img} alt="img" ></Image>
      <div className="info">
        <h3>{title}</h3>
        <InfoLineCard>
          <h3>{price}</h3>
          <Del>{discount}</Del>
          <div>
            <IconFilledCard className="filled fas fa-star"></IconFilledCard>
            <IconFilledCard className="filled fas fa-star"></IconFilledCard>
            <IconFilledCard className="filled fas fa-star"></IconFilledCard>
            <IconFarCard className="far fa-star"></IconFarCard>
            <IconFarCard className="far fa-star"></IconFarCard>
          </div>
          <p>{num}</p>
        </InfoLineCard>
        <TextInfoCard>
          Lorem ipsum, dolor sit amen consectetur adip discing elite dolor sit
          amen consectetur
        </TextInfoCard>
        <InfoIconCard>
          <IconCard className="fa-solid fa-cart-arrow-down"></IconCard>
          <IconCard className="fa-solid fa-heart"></IconCard>
          <IconCard className="fa-solid fa-magnifying-glass-plus"></IconCard>
        </InfoIconCard>
      </div>
    </ProductCard>
  );
}
