import { Image, ParagraphTitle, ResultBox } from "../../../pages/home/Components/Result/Styles";
import { ResultProps } from "../types";

  
  export default function ResultCard({ property }: ResultProps) {
    const { img, title, text } = property;
    return (
      <ResultBox>
            <Image src={img} alt="img" ></Image>
            <h3>{title}</h3>
            <ParagraphTitle>{text}</ParagraphTitle>
      </ResultBox>
    );
  }
 