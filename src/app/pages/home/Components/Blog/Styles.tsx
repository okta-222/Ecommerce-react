import styled from "@emotion/styled";

export const BlogsSection = styled("div")`
  label: BlogsSection;
  padding-top: var(--main-padding-top);
  padding-bottom: var(--main-padding-bottom);
  position: relative;
  text-align: center;
`;
export const HeadTitle = styled("h2")`
  label: HeadTitle;
  text-align: center;
`;
export const Paragraph = styled("p")`
  label: Paragraph;
  text-align: center;
`;
export const BlogWrapper = styled("div")`
  label: BlogWrapper;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: 666px) {
    justify-content: center;
  }
`;
export const BlogsCard = styled("div")`
  label: BlogsCard;
  box-shadow: 0 2px 15px rgb(0 0 0 / 10%);
  background-color: white;
  border-radius: 6px;
  overflow: hidden;
  transition: transform var(--main-transition),
    box-shadow var(--main-transition);
  text-align: left;
  cursor: pointer;
`;

export const ImageOne = styled("img")`
  label: ImageOne;
  width: 300px;
  max-width: 300px;
`;
export const ImageTwo = styled("img")`
  label: ImageTwo;
  width: 20px;
  border: 1px solid var(--btn-color);
  border-radius: 50%;
`;

export const HeadThree = styled("h3")`
  label: HeadThree;
  padding-left: 10px;
  margin-bottom: 10px;
`;
export const ParagaraphCard = styled("p")`
  label: ParagaraphCard;
  padding-left: 10px;
  margin-bottom: 10px;
`;
export const HeadFive = styled("h5")`
  label: HeadFive;
  padding-left: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding-bottom: 10px;
  transition: var(--main-transition);

  &:hover {
    color: var(--btn-color);
  }
`;
export const ContentCard = styled("div")`
  label: ContentCard;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 10px;
`;
