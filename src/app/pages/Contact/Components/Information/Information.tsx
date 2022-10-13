import React from "react";
import {
  Button,
  CardInformation,
  CardInformationLeft,
  CardInformationRight,
  IconCard,
  InformationSection,
  InformationWrapper,
  InputCard,
  ParagraphTxt,
  SelectCard,
  SelectInformation,
  Textarea,
  TextCard,
  TitleCardLeft,
  TitleTxt,
} from "./Styles";
export default function Information() {
  return (
    <InformationSection>
      <div className="container">
        <InformationWrapper>
          <CardInformationLeft>
            <TitleCardLeft>feel free to contact us for any query</TitleCardLeft>
            <CardInformation>
              <IconCard className="fa-solid fa-phone"></IconCard>
              <TextCard>
                <TitleTxt>Phone Number :</TitleTxt>
                <ParagraphTxt>head office(210) 123 451</ParagraphTxt>
              </TextCard>
            </CardInformation>
            <CardInformation>
              <IconCard className="fa-regular fa-envelope"></IconCard>
              <TextCard>
                <TitleTxt>mail address :</TitleTxt>
                <ParagraphTxt>webecyenvato12@gmail.com</ParagraphTxt>
              </TextCard>
            </CardInformation>
            <CardInformation>
              <IconCard className="fa-solid fa-city"></IconCard>
              <TextCard>
                <TitleTxt>office address :</TitleTxt>
                <ParagraphTxt>245 lilian blvd. holbrook</ParagraphTxt>
              </TextCard>
            </CardInformation>
          </CardInformationLeft>

          <CardInformationRight>
            <div className="form">
              <InputCard
                type="text"
                name="text"
                placeholder="First Name"
              ></InputCard>
              <InputCard
                type="text"
                name="text"
                placeholder="Last Name"
              ></InputCard>
              <InputCard
                type="text"
                name="text"
                placeholder="Mail Address"
              ></InputCard>
              <InputCard
                type="text"
                name="text"
                placeholder="Phone Number"
              ></InputCard>
            </div>
            <SelectInformation>
              <SelectCard>
                <option value="0">Choose Product</option>
                <option value="1">Mango</option>
                <option value="1">Apple</option>
                <option value="1">Lemon</option>
              </SelectCard>
            </SelectInformation>
            <Textarea placeholder="Enter Message"></Textarea>
            <Button>Submit Request</Button>
          </CardInformationRight>
        </InformationWrapper>
      </div>
    </InformationSection>
  );
}
