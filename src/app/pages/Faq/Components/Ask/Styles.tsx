import styled from "@emotion/styled";

export const AskSection = styled("div")`
  label: AskSection;
  margin-bottom: 2rem;
`;
export const AskWrapper = styled("div")`
  label: AskWrapper;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.2rem;
  margin-top: 2rem;
  text-transform: capitalize;
  padding: 2rem;
  padding-bottom: 3.5rem;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
export const SideLeft = styled("div")`
  label: SideLeft;
  width: 55%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const TitleSideLeft = styled("h2")`
  label: TitleSideLeft;
  font-size: 1.5rem;
  margin-bottom: 1.8rem;
`;
export const TextAsk = styled("p")`
  label: TextAsk;
  color: rgb(131, 131, 131);
  font-size: 0.9rem;
`;

export const SideRight = styled("div")`
  label: SideRight;
  width: 40%;
  background-color: #f1f5f8;
  padding: 1.5rem;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const ParagraphRight = styled("p")`
  label: ParagraphRight;
  color: rgb(131, 131, 131);
  font-size: 0.9rem;
`;
export const FormRight = styled("p")`
  label: FormRight;
  margin-bottom: 1rem;
`;
export const Input = styled("input")`
  label: Input;
  padding: 0px 10px;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  background-color: rgb(255, 255, 255);
  color: var(--white-color);
  outline: none;
  border: none;
  margin-top: 1rem;
  margin-right: 0.5rem;
`;

export const Textarea = styled("textarea")`
  label: Textarea;
  width: 100%;
  height: 7rem;
  border: none;
  outline: none;
  padding: 0.5rem;
`;
export const Button = styled("button")`
  label: Button;
  width: 40%;
  height: 42px;
`;
