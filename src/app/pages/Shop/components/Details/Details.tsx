import React from "react";
import {
  CardDetails,
  DetailsSection,
  DetailsWrapper,
  ItemDetails,
  LinkDetails,
  ListDetails,
  MainTitle,
  ParagraphDetails,
  TitleCard,
  TitleDetails,
} from "./Styles";

export default function Details() {
  return (
    <DetailsSection>
      <div className="container">
        <ItemDetails>
          <ListDetails>
            <LinkDetails>Description</LinkDetails>
            <LinkDetails>Additional Info</LinkDetails>
            <LinkDetails>Reviews</LinkDetails>
            <LinkDetails>Video</LinkDetails>
          </ListDetails>
        </ItemDetails>
        <DetailsWrapper>
          <TitleDetails>Vivaria a Construction</TitleDetails>
          <ParagraphDetails>
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </ParagraphDetails>
          <MainTitle>More Details</MainTitle>
          <CardDetails>
            <i className="fa-solid fa-arrow-right"></i>
            <TitleCard>
              Lorem Ipsum is simply dummy text of the printing
            </TitleCard>
          </CardDetails>
          <CardDetails>
            <i className="fa-solid fa-arrow-right"></i>
            <TitleCard>
              Lorem Ipsum is simply dummy text of the printing
            </TitleCard>
          </CardDetails>
          <CardDetails>
            <i className="fa-solid fa-arrow-right"></i>
            <TitleCard>
              Lorem Ipsum is simply dummy text of the printing
            </TitleCard>
          </CardDetails>
          <CardDetails>
            <i className="fa-solid fa-arrow-right"></i>
            <TitleCard>
              Lorem Ipsum is simply dummy text of the printing
            </TitleCard>
          </CardDetails>
        </DetailsWrapper>
      </div>
    </DetailsSection>
  );
}
