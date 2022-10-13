import { BlogProps } from "../types";

import { NavLink } from "react-router-dom";
import {
  BlogsCard,
  ContentCard,
  HeadFive,
  HeadThree,
  ImageOne,
  ImageTwo,
  ParagaraphCard,
} from "../../../pages/home/Components/Blog/Styles";
export default function BlogCard({ property }: BlogProps) {
  const { img, img2 } = property;
  return (
    <NavLink to="/blog">
      <BlogsCard>
        <ImageOne src={img} alt="img"></ImageOne>
        <ContentCard>
          <ImageTwo src={img2} alt="img"></ImageTwo>
          <span>Lorem ipsum dolor sit</span>
        </ContentCard>
        <HeadThree>
          pure is the most healthy and <br />
          most nourishing food
        </HeadThree>
        <ParagaraphCard>
          Lorem ipsum dolor sit amt cons <br /> adipose icing elt Lorem ipsum
        </ParagaraphCard>
        <HeadFive>
          Read More<i className="fa-solid fa-arrow-right"></i>
        </HeadFive>
      </BlogsCard>
    </NavLink>
  );
}
