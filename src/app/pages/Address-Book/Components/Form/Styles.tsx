import styled from "@emotion/styled";

export const FormWrapper = styled("div")`
  label: FormWrapper;
  text-transform: capitalize;
  background-color: #f6f6f662;
  margin-bottom: 5rem;
`;

export const ButtonWrapper = styled("div")`
  label: ButtonWrapper;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Button = styled("button")`
  label: Button;
  padding: 0px 10px;
  border-radius: 2px;
  width: 150px;
  height: 42px;
  background-color: var(--btn-color);
  color: var(--white-color);
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const OverViewWrapper = styled("div")`
  label: OverViewWrapper;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 2.5rem;
  margin-bottom: 0.6rem;
  font-weight: bold;
  color: rgb(59, 59, 59);
`;

export const FormInput = styled("input")`
  label: FormInput;
  padding: 0.7rem;
  background-color: rgb(255, 255, 255);
  border: 1px solid #ddd;
  outline: none;
  color: rgb(153, 153, 153);
  border-radius: 2px;
`;

export const FormSelect = styled("select")`
  label: FormSelect;
  padding: 0.7rem;
  background-color: rgb(255, 255, 255);
  border: 1px solid #ddd;
  outline: none;
  color: rgb(153, 153, 153);
  border-radius: 2px;
`;
export const FormLabel = styled("label")`
  label: FormLabel;
  margin-top: 0.7rem;
`;
