import React from "react";
import {
  AskSection,
  AskWrapper,
  Button,
  FormRight,
  Input,
  ParagraphRight,
  SideLeft,
  SideRight,
  Textarea,
  TextAsk,
  TitleSideLeft,
} from "./Styles";

export default function Ask() {
  return (
    <AskSection>
      <div className="container">
        <AskWrapper>
          <SideLeft>
            <TitleSideLeft>General Information</TitleSideLeft>
            <div className="tex-task">
              <h4>What Is Lauren Epsom Is Simply Dummy of printing ?</h4>
              <TextAsk>
                it's a long distillation fact that reader will be restricted by
                the red double liquid
              </TextAsk>
            </div>
            <div className="text-ask">
              <h4>what is Lauren Epsom Epson is simply dummy tickets ?</h4>
              <TextAsk>
                it's a long distillation fact that reader will be restricted by
                the red double liquid
              </TextAsk>
            </div>
            <div className="text-ask">
              <h4>simply popular believe tradition reference ?</h4>
              <TextAsk>
                it's a long distillation fact that reader will be restricted by
                the red double liquid
              </TextAsk>
            </div>
            <div className="text-ask">
              <h4>generate Lauren Epsom a place holder text ?</h4>
              <TextAsk>
                it's a long distillation fact that reader will be restricted by
                the red double liquid
              </TextAsk>
            </div>
          </SideLeft>

          <SideRight>
            <h2>Ask a Question</h2>
            <ParagraphRight>
              It's A Long Distillation Fact That Reader Will Be Restricted By
            </ParagraphRight>
            <FormRight>
              <Input type="text" name="text" placeholder="Your Name"></Input>
              <Input type="text" name="text" placeholder="Subject"></Input>
            </FormRight>
            <Textarea placeholder="type your Message"></Textarea>
            <Button className="btn">Submit Request</Button>
          </SideRight>
        </AskWrapper>
      </div>
    </AskSection>
  );
}
