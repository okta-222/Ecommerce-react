import React from "react";
import data from "./data";
import BrandsCard from "components/BrandsCard/BrandsCard";
import { Brand, BrandSection, BrandsWrapper } from "./Styles";

export default function Brands() {
  return (
      <BrandSection>
        <div className="container">
          <BrandsWrapper>
          <Brand>
            {data.map((property) => (
              <BrandsCard key={property.id} property={property} />
            ))}
          </Brand>
          </BrandsWrapper>
        </div>  
      </BrandSection>
  );
}


