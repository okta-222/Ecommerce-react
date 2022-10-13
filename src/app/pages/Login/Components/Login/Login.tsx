import React from "react";
import {
  BtnCheck,
  Button,
  CheckRight,
  Input,
  LoginSection,
  LoginWrapper,
  ParagraphLeftOne,
  ParagraphLeftTwo,
  ParagraphRight,
  SideLeft,
  SideRight,
  TitleLeft,
} from "./Styles";
export default function Login() {
  return (
    <LoginSection>
      <div className="container">
        <LoginWrapper>
          <SideLeft>
            <TitleLeft>login</TitleLeft>
            <ParagraphLeftOne>
              please login using account details below
            </ParagraphLeftOne>
            <Input type="text" placeholder="Email Address"></Input>
            <Input type="password" placeholder="Password"></Input>

            <ParagraphLeftTwo className="pass">
              forgot your password ?
            </ParagraphLeftTwo>
            <Button>Sign In</Button>
          </SideLeft>
          <SideRight>
            <TitleLeft>register</TitleLeft>
            <ParagraphLeftOne className="text">
              don't have an account? register
            </ParagraphLeftOne>
            <Input type="text" placeholder="email address"></Input>
            <Input type="password" placeholder="create password"></Input>
            <ParagraphRight className="regist">
              password must contain (@, letter, number)
            </ParagraphRight>
            <Input type="text" placeholder="first name"></Input>
            <Input type="text" placeholder="last name"></Input>
            <Input type="number" placeholder="phone number"></Input>
            <CheckRight>
              <Input type="checkbox"></Input>
              <BtnCheck>
                {/* يوجد هبد هنا */}I agree terms & Conditions All Policy
              </BtnCheck>
            </CheckRight>
            <button>Create Account</button>
          </SideRight>
        </LoginWrapper>
      </div>
    </LoginSection>
  );
}
