import React from "react";
import FeaturedCard from "components/FeaturedCard/featuredCard";
import data from "./data";
import { BannerSection, BannerWrapper } from "./Styles";

export default function Banner3() {
  return (
    <BannerSection>
      <div className="container">
      <BannerWrapper>
            {data.map((property) => (
              <FeaturedCard key={property.id} property={property} />
            ))}
        </BannerWrapper>
        </div>
    </BannerSection>
  );
} 
