import { TrendsProps } from "../types";

export default function TrendsCard({ property }: TrendsProps) {
  const { img, title, text, discount } = property;
  return (
    <div className="trending-card">
      <img src={img} alt="" />
      <div className="txt">
        <h3>{title}</h3>
        <p>
          {text} <del>{discount}</del>
        </p>
      </div>
    </div>
  );
}
