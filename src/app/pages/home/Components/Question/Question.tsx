import React from "react";
import data from "./data";
import QuestionCard from "../../../../design-system/components/QuestionCard/QuestionCard";
import Fruit from "../../../../../shared/assets/images/fruit.jpg";
import {
  Accordion,
  HeadTitle,
  Image,
  ImgQuestion,
  ParagraphTitle,
  QuestionSection,
  WrapperQuestion,
} from "./Styles";

export default function Question() {
  return (
    <QuestionSection>
      <div className="container">
        <HeadTitle>Some Question</HeadTitle>
        <ParagraphTitle>
          Street art salvia irony wolf waistcoat actually loom meh fap
        </ParagraphTitle>
        <WrapperQuestion>
          <Accordion>
            {data.map((property) => (
              <QuestionCard key={property.id} property={property} />
            ))}
          </Accordion>
          <ImgQuestion>
            <Image src={Fruit} alt="img"></Image>
          </ImgQuestion>
        </WrapperQuestion>
      </div>
    </QuestionSection>
  );
}
