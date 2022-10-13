import styled from "@emotion/styled";

export const FormSection = styled("div")`
  label: FormSection;
  margin-bottom: 5rem;
  text-transform: capitalize;
  background-color: #f6f6f662;
`;
export const FormWrapper = styled("div")`
  label: FormWrapper;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.2rem;
  margin-top: 1rem;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const FormLeft = styled("div")`
  label: FormLeft;
  width: 25%;
  text-transform: capitalize;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.274);
  background-color: white;
  border-radius: 6px;
  padding-bottom: 1rem;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const TitleFormLeft = styled("h2")`
  label: TitleFormLeft;
  padding: 2rem 0 1rem 1.5rem;
  font-weight: normal;
`;
export const CardFormLeft = styled("div")`
  label: CardFormLeft;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 1rem 0 1rem 1.5rem;
  transition: var(--main-transition);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: #20b30e;
    right: -100%;
    top: 0;
  }

  &:hover {
    background-color: #edf2ee;
    &::before {
      left: 0;
    }
  }
`;
export const TitleCard = styled("h4")`
  label: TitleCard;
  font-size: 0.9rem;
`;
export const FormRight = styled("div")`
  label: FormRight;
  width: 73%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const SettingsRightTop = styled("div")`
  label: SettingsRightTop;
  text-transform: capitalize;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
  border-radius: 6px;
  position: relative;
  margin-bottom: 1.5rem;

  &::after {
    position: absolute;
    content: "";
    top: 3.2rem;
    width: 100%;
    height: 1px;
    background-color: #ddd;
    left: 0;
  }
`;
export const SettingsRightCenter = styled("div")`
  label: SettingsRightCenter;
  text-transform: capitalize;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
  border-radius: 6px;
  position: relative;
  margin-bottom: 1.5rem;

  &::after {
    position: absolute;
    content: "";
    top: 3.2rem;
    width: 100%;
    height: 1px;
    background-color: #ddd;
    left: 0;
  }
`;
export const SettingsRightBottom = styled("div")`
  label: SettingsRightBottom;
  text-transform: capitalize;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
  border-radius: 6px;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    top: 3.2rem;
    width: 100%;
    height: 1px;
    background-color: #ddd;
    left: 0;
  }
`;
export const TitleSettings = styled("h3")`
  label: TitleSettings;
  color: rgb(32, 32, 32);
  margin-bottom: 1rem;
`;
export const CardFormRightTop = styled("div")`
  label: CardFormRightTop;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 570px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;
export const CardRightOne = styled("div")`
  label: CardRightOne;
  width: 55%;
`;
export const CardRightTwo = styled("div")`
  label: CardRightTwo;
  width: 43%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const FormCardOne = styled("form")`
  label: FormCardOne;
  display: flex;
  flex-direction: column;
  align-items: inherit;
`;
export const LabelCard = styled("label")`
  label: LabelCard;
  font-weight: normal;
  font-size: 19px;
  margin-top: 0.4rem;
`;
export const InputCard = styled("input")`
  label: InputCard;
  margin-top: 0.2rem;
  padding: 0.6rem;
  border: 1px solid #ddd;
  outline: none;
`;
export const ButtonCard = styled("button")`
  label: ButtonCard;
  border-radius: 19px;
  width: 145px;
  height: 40px;
  background-color: #00b108;
  color: white;
`;
export const ImageCard = styled("img")`
  label: ImageCard;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0.5rem;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 5px solid rgb(255, 255, 255);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.425);
`;
export const ButtonCard2 = styled("button")`
  label: ButtonCard2;
  margin-top: 9.5rem;
  border-radius: 19px;
  width: 155px;
  height: 40px;
  background-color: #ffffff;
  color: #00b108;
  border: 1px solid #00b108;
`;
export const CardCenter = styled("div")`
  label: CardCenter;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const FormCardCenter = styled("form")`
  label: FormCardCenter;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
    align-items: inherit;
    width: 100%;
  }
`;

export const DivCard = styled("div")`
  label: DivCard;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 570px) {
    width: 100%;
  }
`;
export const FormTwo = styled("form")`
  label: FormTwo;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 0.5rem;
`;
export const FormThree = styled("form")`
  label: FormThree;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
    align-items: inherit;
    width: 100%;
  }
`;
export const FormFour = styled("form")`
  label: FormFour;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 0.5rem;
  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
    align-items: inherit;
    width: 100%;
  }
`;
export const DivFormThree = styled("div")`
  label: DivFormThree;
  width: 33%;
  @media (max-width: 570px) {
    width: 100%;
  }
`;
export const DivFormFour = styled("div")`
  label: DivFormFour;
  width: 50%;
  @media (max-width: 570px) {
    width: 100%;
  }
`;
export const ButtonCardFour = styled("button")`
  label: ButtonCardFour;
  border-radius: 19px;
  width: 145px;
  height: 40px;
  background-color: #00b108;
  color: white;
`;
export const CardRightBottom = styled("div")`
  label: CardRightBottom;
  display: flex;
  flex-direction: column;
  align-items: inherit;
  gap: 1rem;
`;
export const OldPass = styled("div")`
  label: OldPass;
  width: 100%;
`;
export const NewPass = styled("div")`
  label: NewPass;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
    align-items: inherit;
  }
`;
export const SearchBar = styled("div")`
  label: SearchBar;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const InputBar = styled("input")`
  label: InputBar;
  width: 100%;
  height: 2.4rem;
  background: #f5f5f5;
  outline: none;
  border: 1px solid #ddd;
  padding: 0 3.5rem 0 0.5rem;
  font-size: 1rem;
`;
export const ButtonSubmit = styled("button")`
  label: ButtonSubmit;
  width: 4.5rem;
  height: 2.4rem;
  margin-left: -6rem;
  background: white;
  color: #000000;
  border: 1px solid #ddd;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
export const Icon = styled("i")`
  label: Icon;
  color: rgb(0, 0, 0);
`;
export const PassLeft = styled("div")`
  label: PassLeft;
  width: 100%;
`;
export const PassRight = styled("div")`
  label: PassRight;
  width: 100%;
`;
