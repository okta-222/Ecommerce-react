import { EmployeeCardFour, ImageCardFour, InfoCardFour, SpanCardFour, TitleEmployeeCardFour } from "../../../pages/Blog/Components/Employees/Styles";
import { EmployeeProps } from "../types";

export default function EmployeeCard({ property }: EmployeeProps) {
  const { img, title } = property;
  return (
    <EmployeeCardFour>
      <ImageCardFour src={img} alt="img" ></ImageCardFour>
      <InfoCardFour>
        <SpanCardFour>
          <i className="fa-solid fa-calendar-days"></i>July 27.2022
        </SpanCardFour>
        <TitleEmployeeCardFour>{title}</TitleEmployeeCardFour>
      </InfoCardFour>
    </EmployeeCardFour>
  );
}
