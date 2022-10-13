import { BrandCard, ImageBrandCard, TitleBrandCard } from "../../../pages/home/Components/Brands/Styles";
import { BrandsProps } from "../types";



  
  export default function BrandsCard({ property }: BrandsProps) {
    const { img, title } = property;
    return (
      <BrandCard>
          <ImageBrandCard src={img} alt="img" ></ImageBrandCard>
          <TitleBrandCard>{title}</TitleBrandCard>
      </BrandCard>
    );
  }

