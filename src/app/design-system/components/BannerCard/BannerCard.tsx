import { BanerCard, ContentBanneCardr, IconFar, IconFilled, ImageBanner,ParagraphCard, } from "../../../pages/home/Components/PopularProducts/Styles";
import { BannerProps } from "../types";

export default function BannerCard({ property }: BannerProps) {
  const { img, title, price, discount } = property;
  return (
    <BanerCard>
      <ImageBanner src={img} alt="" ></ImageBanner>
      <ContentBanneCardr>
        <h3>{title}</h3>
        <ParagraphCard>
          {price}
          <del> {discount}</del>
        </ParagraphCard>
        <div className="rate">
          <IconFilled className="filled fas fa-star"></IconFilled>
          <IconFilled className="filled fas fa-star"></IconFilled>
          <IconFilled className="filled fas fa-star"></IconFilled>
          <IconFar className="far fa-star"></IconFar>
          <IconFar className="far fa-star"></IconFar>
        </div>
      </ContentBanneCardr>
    </BanerCard>
  );
}
