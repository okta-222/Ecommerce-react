import img2 from "../../../../../shared/assets/images/m1.avif";
import img3 from "../../../../../shared/assets/images/m2.avif";
import BannerCard from "../../../../design-system/components/BannerCard/BannerCard";
import data from "./data";
import { BannerBottom, BannerSection, BannerTop, BoxPic, ButtonLeft, Container, ContentBoxPic, ContentSideLeft, HeadTitle, HeadTitleLeft, IconFar, IconFilled, ImageBoxPic, ParagraphBoxPic, ParagraphTitle, ParagraphTitleLeft, SideLeft, SideRight } from "./Styles";

export default function PopularProducts() {
  return (
    <BannerSection>
      <Container>
        <HeadTitle>Popular Product</HeadTitle> 
        <ParagraphTitle>
          Lorem ipsum dolor sit amen consectetur add pissing
        </ParagraphTitle>
        <BannerTop>
          <SideLeft> 
            <ContentSideLeft>
              <HeadTitleLeft>
                Up to 15% off Fresh
                <br /> Almond Seed
              </HeadTitleLeft>
              <ParagraphTitleLeft>from $99.2</ParagraphTitleLeft>
              <ButtonLeft>Shop Now</ButtonLeft>
            </ContentSideLeft>
          </SideLeft> 
          <SideRight>



            <BoxPic>
              <ImageBoxPic src={img2} alt="img" ></ImageBoxPic>
              <ContentBoxPic>
                <h3>Bombay Mango</h3>
                <ParagraphBoxPic>
                  $5.00 <del>$8.00</del>
                </ParagraphBoxPic>
                <div className="rate">
                  <IconFilled className="filled fas fa-star"></IconFilled>
                  <IconFilled className="filled fas fa-star"></IconFilled>
                  <IconFilled className="filled fas fa-star"></IconFilled>
                  <IconFar className="`far fa-star"></IconFar>
                  <IconFar className="far fa-star"></IconFar>
                </div>
              </ContentBoxPic>
            </BoxPic>
            <BoxPic>
              <ImageBoxPic src={img3} alt="img" ></ImageBoxPic>
              <ContentBoxPic>
                <h3>Badname Mango</h3>
                <ParagraphBoxPic>
                  $9.00 <del>$11.00</del>
                </ParagraphBoxPic>
                <div className="rate">
                  <IconFilled className="filled fas fa-star"></IconFilled>
                  <IconFilled className="filled fas fa-star"></IconFilled>
                  <IconFilled className="filled fas fa-star"></IconFilled>
                  <IconFar className="far fa-star"></IconFar>
                  <IconFar className="far fa-star"></IconFar>
                </div>
              </ContentBoxPic>
            </BoxPic>
          </SideRight>
        </BannerTop>

        <BannerBottom>
          {data.map((property) => (
            <BannerCard key={property.id} property={property} />
          ))}
        </BannerBottom>
      </Container>
    </BannerSection>
  );
}

