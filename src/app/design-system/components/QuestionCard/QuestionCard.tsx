import { QuestionProps } from "../types";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AnswerCard,
  AskCard,
  HeadTitleAsk,
  ParagraphAsk,
  QuestionsCard,
} from "../../../pages/home/Components/Question/Styles";
export default function QuestionCard({ property }: QuestionProps) {
  const { title, text } = property;
  const [content, setContent] = useState(false);

  const display = () => {
    setContent(!content);
  };
  return (
    <QuestionsCard>
      <AskCard>
        <HeadTitleAsk onClick={display}>{title}</HeadTitleAsk>
        <ParagraphAsk onClick={display}>+</ParagraphAsk>
      </AskCard>
      <NavLink to="/faq">
        <div>{content && <AnswerCard>{text}</AnswerCard>}</div>
      </NavLink>
    </QuestionsCard>
  );
}
