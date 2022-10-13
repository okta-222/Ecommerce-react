import {
  ResultCard,
  Image,
  TitleCard,
  ParagraphCard,
} from "../../../pages/home/Components/Footer/Styles";
import { FooterProps } from "../types";

export default function FooterCard({ property }: FooterProps) {
  const { img, title } = property;
  return (
    <ResultCard>
      <Image src={img} alt=""></Image>
      <div className="info">
        <TitleCard>{title}</TitleCard>
        <ParagraphCard>from handmade always</ParagraphCard>
      </div>
    </ResultCard>
  );
}
