import {
  Card,
  IconCard,
  ImgCard,
  SpanCard,
  IconCrdArrow,
  TextCard,
  Image,
  ParagraphCard,
  DelCard,
} from "../../../pages/Shop/components/Banner3/Styles";
import { FeaturedProps } from "../types";

export default function FeaturedCard({ property }: FeaturedProps) {
  const { img, title, price, discount } = property;
  return (
    <Card>
      <IconCard>
        <SpanCard>
          <IconCrdArrow className="fa-solid fa-cart-arrow-down"></IconCrdArrow>
        </SpanCard>
        <SpanCard>
          <i className="fas fa-heart"></i>
        </SpanCard>
        <SpanCard>
          <i className="fa-solid fa-magnifying-glass-plus"></i>
        </SpanCard>
      </IconCard>
      <ImgCard>
        <Image src={img} alt="img"></Image>
      </ImgCard>
      <TextCard>
        <h4>{title}</h4>
        <ParagraphCard>
          {price}
          <DelCard> {discount}</DelCard>
        </ParagraphCard>
      </TextCard>
    </Card>
  );
}
