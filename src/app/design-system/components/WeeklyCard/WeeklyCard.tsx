import {
  FilledRate,
  HeadTitleCard,
  IconBox,
  ImageCard,
  ParagraphCard,
  RateCard,
  SlideCard,
  SpanCard,
} from "../../../pages/home/Components/Weekly/Styles";
import { WeeklyProps } from "../types";

export default function WeeklyCard({ property }: WeeklyProps) {
  const { img, title, price } = property;
  return (
    <SlideCard>
      <IconBox>
        <SpanCard>
          <i className="fa-solid fa-cart-arrow-down"></i>
        </SpanCard>
        <SpanCard>
          <i className="fas fa-heart"></i>
        </SpanCard>
        <SpanCard>
          <i className="fa-solid fa-magnifying-glass-plus"></i>
        </SpanCard>
      </IconBox>
      <ImageCard src={img} alt="img"></ImageCard>
      <RateCard>
        <FilledRate className="filled fas fa-star"></FilledRate>
        <FilledRate className="filled fas fa-star"></FilledRate>
        <FilledRate className="filled fas fa-star"></FilledRate>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </RateCard>
      <HeadTitleCard>{title}</HeadTitleCard>
      <ParagraphCard>{price}</ParagraphCard>
    </SlideCard>
  );
}
