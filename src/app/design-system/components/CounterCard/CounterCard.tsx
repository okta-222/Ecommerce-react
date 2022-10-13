import { CountCard, Image } from "../../../pages/Shop/components/Counter2/Styles";
import { CounterProps } from "../types";

export default function CounterCard({ property }: CounterProps) {
  const { img } = property;
  return (
    <CountCard>
      <Image src={img} alt="alt" ></Image>   
    </CountCard>
  );
}
