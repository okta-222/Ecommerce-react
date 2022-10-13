import React from "react";
import data from "./data";
import BlogCard from "../../../../design-system/components/BlogCard/BlogCard";
import { BlogsSection, BlogWrapper, HeadTitle, Paragraph } from "./Styles";

export default function Blog() {
  return (
    <BlogsSection>
      <div className="container">
        <HeadTitle>Latest Blogs</HeadTitle>
        <Paragraph>
          Lorem ipsum dolor sit amt consectetur adipose icing.
        </Paragraph>
        <BlogWrapper>
        {data.map((property) => (
              <BlogCard key={property.id} property={property} /> 
            ))}
        </BlogWrapper>
      </div>
    </BlogsSection>
  );
}
