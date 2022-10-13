import { CardEmployee, Image, TextCard, TitleOne, IconCard,TitleTwo, SpanCard, Description, IconCard2 } from "../../../pages/Blog/Components/Employees/Styles";
import { EmployeesProps } from "../types";


export default function EmployeesCard({ property }: EmployeesProps) {
  const { img, title } = property;
  return (
    <CardEmployee>
      <Image src={img} alt="img" ></Image>
      <TextCard>
        <TitleOne >
          <IconCard className="fa-solid fa-calendar-days"></IconCard>July 27.2022
          <IconCard className="fa-solid fa-comment-dots"></IconCard> 1 comments
        </TitleOne>
        <TitleTwo className="main-txt-card">{title}</TitleTwo>
        <SpanCard>
          it's a long distillation fact that reader will be restricted by the
          red double liquid at its layout the point of using loading Epson is
          that
        </SpanCard>
        <Description>
          Read More<IconCard2 className="fa-solid fa-circle-chevron-right"></IconCard2>
        </Description>
      </TextCard>
    </CardEmployee>
  );
}
