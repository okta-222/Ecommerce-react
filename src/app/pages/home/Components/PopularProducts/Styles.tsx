import styled from "@emotion/styled";

export const BannerSection = styled("div")`
  label: BannerSection;
  padding-top: var(--main-padding-top);
  padding-bottom: var(--main-padding-bottom);
  position: relative;
`;

export const Container = styled("div")`
  label: container;
  position: relative;
`;

export const BannerTop = styled("div")`
  label: BannerTop;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  @media (max-width: 787px) {
    display: block;
  }
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;
export const BannerBottom = styled("div")`
  label: BannerBottom;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;

export const HeadTitle = styled("h2")`
  label: HeadTitle;
  text-align: center;
  font-size: 34px;
`;
export const ParagraphTitle = styled("p")`
  label: ParagraphTitle;
  text-align: center;
  color: rgb(145, 145, 145);
  margin-bottom: 50px;
  font-size: 14px;
`;

export const SideLeft = styled("div")`
  label: SideLeft;
  background-image: url("../../../../../shared/assets/images/maa.avif");
  background-size: cover;
  background-repeat: no-repeat;
  height: 348px;
  border-radius: 6px;
  width: 50%;
  @media (max-width: 992px) {
    width: 100%;
  }
  @media (max-width: 787px) {
    width: 100%;
  }
`;
export const ContentSideLeft = styled("div")`
  label: ContentSideLeft;
  padding-left: 4rem;
  padding-top: 3rem;
`;
export const HeadTitleLeft = styled("h3")`
  label: HeadTitleLeft;
  color: black;
  font-size: 22px;
`;
export const ParagraphTitleLeft = styled("p")`
  label: ParagraphTitleLeft;
  color: #affa17;
  font-weight: bold;
  text-align: left;
`;
export const ButtonLeft = styled("button")`
  label: ButtonLeft;
  padding: 0px 10px;
  border-radius: 2px;
  width: 170px;
  height: 32px;
  background-color: var(--btn-color);
  color: var(--white-color);
  outline: none;
  border: none;
  margin-top: 20px;
  margin-bottom: 15px;
  cursor: pointer;
  text-align: center;
  background-color: transparent;
  border: 1px solid #affa17;
  color: #affa17;
  width: 100px;
`;
export const SideRight = styled("div")`
  label: SideRight;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  @media (max-width: 992px) {
    width: 100%;
  }
  @media (max-width: 787px) {
    width: 100%;
    margin: 1rem 0;
    display: block;
  }
`;

export const IconFilled = styled("i")`
  label: IconFilled;
  color: #ffc107;
`;
export const IconFar = styled("i")`
  label: IconFar;
  color: black;
`;
export const BoxPic = styled("div")`
  label: BoxPic;
  box-shadow: 0 2px 15px rgb(0 0 0 / 10%);
  background-color: white;
  border-radius: 6px;
  overflow: hidden;
  transition: transform var(--main-transition),
    box-shadow var(--main-transition);
  height: 348px;
  width: 50%;
  @media (max-width: 787px) {
    margin: 1rem 0;
    width: 100%;
  }
`;
export const ImageBoxPic = styled("img")`
  label: ImageBoxPic;
  width: 100%;
  height: 220px;
`;
export const ContentBoxPic = styled("div")`
  label: ContentBoxPic;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5px;
`;
export const ParagraphBoxPic = styled("p")`
  label: ParagraphBoxPic;
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const BanerCard = styled("div")`
  label: BanerCard;
  box-shadow: 0 2px 15px rgb(0 0 0 / 10%);
  background-color: white;
  overflow: hidden;
  border-radius: 6px;
  transition: transform var(--main-transition),
    box-shadow var(--main-transition);
  width: 25%;
  height: 348px;
`;
export const ParagraphCard = styled("p")`
  label: ParagraphCard;
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const ImageBanner = styled("img")`
  label: ImageBanner;
  width: 100%;
  max-width: 100%;
  height: 220px;
`;
export const ContentBanneCardr = styled("div")`
  label: ContentBanneCardr;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5px;
`;
