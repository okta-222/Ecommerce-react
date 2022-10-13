import {
  ButtonSideRight,
  ImageCard,
  InfoBox,
  ParagraphSideRight,
  SideLeftCard,
  SideRightCard,
  TitleSideRight,
  WashCard,
} from "../../../pages/WashList/Components/List/Styles";
import { WashListProps } from "../types";

export default function WashListCard({ property }: WashListProps) {
  const { img, title, price, text } = property;
  return (
    <WashCard>
      <SideLeftCard>
        <h4>X</h4>
        <ImageCard src={img} alt="img"></ImageCard>
        <h4>{title}</h4>
      </SideLeftCard>
      <SideRightCard>
        <h4>{price}</h4>
        <TitleSideRight>{text}</TitleSideRight>
        <InfoBox>
          <ParagraphSideRight>added on: October 22, 2021</ParagraphSideRight>
          <ButtonSideRight>add to cart</ButtonSideRight>
        </InfoBox>
      </SideRightCard>
    </WashCard>
  );
}
