import styled from "@emotion/styled";

export const QuestionSection = styled("div")`
  label: QuestionSection;
  background-color: rgb(255, 255, 255);
  padding-top: var(--main-padding-top);
  padding-bottom: var(--main-padding-bottom);
  position: relative;
`;

export const WrapperQuestion = styled("div")`
  label: WrapperQuestion;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 20px;
  padding: 10px;
  outline: none;
  box-shadow: 0px 12px 20px 0px rgb(0 0 0 / 13%),
    0px 2px 4px 0px rgb(0 0 0 / 12%);
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1.2rem;
  }
`;

export const Accordion = styled("div")`
  label: Accordion;
  position: relative;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const ImgQuestion = styled("div")`
  label: ImgQuestion;
  position: relative;
  overflow: hidden;
  margin-left: 20px;
`;
export const Image = styled("img")`
  label: Image;
  width: 100%;
  max-width: 100%;
`;

export const HeadTitle = styled("h2")`
  label: HeadTitle;
  width: 450px;
  max-width: 100%;
`;
export const ParagraphTitle = styled("p")`
  label: ParagraphTitle;
  width: 450px;
  max-width: 100%;
`;

export const QuestionsCard = styled("div")`
  label: QuestionsCard;
  padding: 15px;
`;
export const AskCard = styled("div")`
  label: AskCard;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  width: 80%;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  margin-bottom: 0.4em;
  border: 1px solid #ddd;
  transition: var(--main-transition);
  &:hover {
    background-color: var(--btn-color);
  }
`;
export const HeadTitleAsk = styled("h4")`
  label: HeadTitleAsk;
  color: rgb(139, 139, 139);
  font-size: 15px;
  cursor: pointer;
`;
export const ParagraphAsk = styled("p")`
  label: ParagraphAsk;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
`;
export const AnswerCard = styled("p")`
  label: AnswerCard;
  background-color: white;
  font-size: 16px;
  width: 77%;
  margin: 0 auto;
  text-align: left;
  padding: 0.2em;
  transition: var(--main-transition);
  color: rgb(82, 82, 82);
  margin-bottom: 0.4em;
`;
