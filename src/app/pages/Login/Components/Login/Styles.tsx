import styled from "@emotion/styled";

export const LoginSection = styled("div")`
  label: LoginSection;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;
export const LoginWrapper = styled("div")`
  label: LoginWrapper;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 2rem;
  text-transform: capitalize;
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;
export const SideLeft = styled("div")`
  label: SideLeft;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.068);
  padding: 2rem;
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const SideRight = styled("div")`
  label: SideRight;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.068);
  padding: 2rem;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const TitleLeft = styled("h2")`
  label: TitleLeft;
  text-align: center;
`;
export const ParagraphLeftOne = styled("p")`
  label: ParagraphLeftOne;
  text-align: center;
  color: #777;
  margin-top: -2.2rem;
  font-size: 13px;
`;
export const Input = styled("input")`
  label: Input;
  padding: 0.7rem;
  background-color: rgb(255, 255, 255);
  border: 1px solid #ddd;
  outline: none;
  color: rgb(153, 153, 153);
  border-radius: 2px;
  text-transform: capitalize;

  input[type="checkbox"] {
    border-radius: 50%;
    border: 1px solid var(--btn-color);
    cursor: pointer;
    appearance: inherit;
    transition: var(--main-transition);
  }
  input[type="checkbox"]:checked {
    background-color: var(--btn-color);
  }
`;
export const ParagraphLeftTwo = styled("p")`
  label: ParagraphLeftTwo;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`;
export const Button = styled("button")`
  label: Button;
  padding: 0.7rem;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(112, 172, 22);
  outline: none;
  color: rgb(153, 153, 153);
  border-radius: 2px;
  cursor: pointer;
  transition: var(--main-transition);

  &:hover {
    background-color: rgb(112, 172, 22);
    color: rgb(255, 255, 255);
  }
`;
export const ParagraphRight = styled("p")`
  label: ParagraphRight;
  margin-top: -2rem;
  font-size: 14px;
  color: #777;
`;
export const CheckRight = styled("div")`
  label: CheckRight;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

export const BtnCheck = styled("label")`
  label: BtnCheck;
  font-size: 16px;
  color: #777;
  text-transform: lowercase;
`;
