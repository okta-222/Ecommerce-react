import React from "react";
import { NavLink } from "react-router-dom";
import img from "images/img/avatar-04.png";
import {
  ButtonCard,
  ButtonCard2,
  ButtonCardFour,
  ButtonSubmit,
  CardCenter,
  CardFormLeft,
  CardFormRightTop,
  CardRightBottom,
  CardRightOne,
  CardRightTwo,
  DivCard,
  DivFormFour,
  DivFormThree,
  FormCardCenter,
  FormCardOne,
  FormFour,
  FormLeft,
  FormRight,
  FormSection,
  FormThree,
  FormTwo,
  FormWrapper,
  Icon,
  ImageCard,
  InputBar,
  InputCard,
  LabelCard,
  NewPass,
  OldPass,
  PassLeft,
  PassRight,
  SearchBar,
  SettingsRightBottom,
  SettingsRightCenter,
  SettingsRightTop,
  TitleCard,
  TitleFormLeft,
  TitleSettings,
} from "./Styles";
export default function Form() {
  return (
    <FormSection>
      <div className="container">
        <FormWrapper>
          <FormLeft>
            <TitleFormLeft>Navigation</TitleFormLeft>

            <CardFormLeft>
              <i className="fa-solid fa-square-poll-horizontal"></i>
              <NavLink to="/dashboard">
                <TitleCard>Dashboard</TitleCard>
              </NavLink>
            </CardFormLeft>

            <CardFormLeft>
              <i className="fa-solid fa-repeat"></i>
              <NavLink to="/order-history">
                <TitleCard>Order History</TitleCard>
              </NavLink>
            </CardFormLeft>
            <CardFormLeft>
              <i className="fa-regular fa-heart"></i>
              <NavLink to="/wash-list">
                <TitleCard>Wishlist</TitleCard>
              </NavLink>
            </CardFormLeft>

            <CardFormLeft>
              <i className="fa-solid fa-image-portrait"></i>
              <NavLink to="/address">
                <TitleCard>address book</TitleCard>
              </NavLink>
            </CardFormLeft>

            <CardFormLeft>
              <i className="fa-solid fa-gear"></i>
              <NavLink to="/settings">
                <TitleCard>Settings</TitleCard>
              </NavLink>
            </CardFormLeft>

            <CardFormLeft>
              <i className="fa-solid fa-right-to-bracket"></i>
              <NavLink to="/login">
                <TitleCard>log out</TitleCard>
              </NavLink>
            </CardFormLeft>
          </FormLeft>

          <FormRight>
            <SettingsRightTop>
              <TitleSettings>Account Settings</TitleSettings>

              <CardFormRightTop>
                <CardRightOne>
                  <FormCardOne>
                    <LabelCard>First name</LabelCard>
                    <InputCard
                      type="text"
                      name="text"
                      placeholder="Dianne"
                    ></InputCard>
                    <LabelCard>Last name</LabelCard>
                    <InputCard
                      type="text"
                      name="text"
                      placeholder="Russel"
                    ></InputCard>
                    <LabelCard>email</LabelCard>
                    <InputCard
                      type="email"
                      name="email"
                      placeholder="diannerussel@gmail.com"
                    ></InputCard>
                    <LabelCard>Phone Number</LabelCard>
                    <InputCard
                      type="number"
                      name="number"
                      placeholder="(603) 555-0123"
                    ></InputCard>
                    <ButtonCard>Save Changes</ButtonCard>
                  </FormCardOne>
                </CardRightOne>

                <CardRightTwo>
                  <ImageCard src={img} alt="img"></ImageCard>
                  <ButtonCard2>Choose Image</ButtonCard2>
                </CardRightTwo>
              </CardFormRightTop>
            </SettingsRightTop>

            <SettingsRightCenter>
              <TitleSettings>Billing Address</TitleSettings>
              <CardCenter>
                <FormCardCenter>
                  <DivCard>
                    <label>First name</label>
                    <InputCard
                      type="text"
                      name="text"
                      placeholder="Dianne"
                    ></InputCard>
                  </DivCard>
                  <DivCard>
                    <label>Last name</label>
                    <InputCard
                      type="text"
                      name="text"
                      placeholder="Dianne"
                    ></InputCard>
                  </DivCard>
                  <DivCard>
                    <label>Company Name</label>
                    <InputCard
                      type="text"
                      name="text"
                      placeholder="Dianne"
                    ></InputCard>
                  </DivCard>
                </FormCardCenter>

                <FormTwo>
                  <label>Street Address</label>
                  <InputCard
                    className="form-input"
                    type="text"
                    name="text"
                    placeholder="4140 parl"
                  ></InputCard>
                </FormTwo>
                <FormThree>
                  <DivFormThree>
                    <label>Contrary / Region</label>
                    <select className="form-input">
                      <option value=""></option>
                      <option value="egypt">egypt</option>
                      <option value="saudi">saudi</option>
                      <option value="iraq">iraq</option>
                      <option value="qatar">qatar</option>
                      <option value="morocco">morocco</option>
                      <option value="syria">syria</option>
                    </select>
                  </DivFormThree>
                  <DivFormThree>
                    <label>States</label>
                    <select className="form-input">
                      <option value=""></option>
                      <option value="egypt">egypt</option>
                      <option value="saudi">saudi</option>
                      <option value="iraq">iraq</option>
                      <option value="qatar">qatar</option>
                      <option value="morocco">morocco</option>
                      <option value="syria">syria</option>
                    </select>
                  </DivFormThree>
                  <DivFormThree>
                    <label>Zip Code</label>
                    <InputCard
                      type="number"
                      name="number"
                      className="form-input"
                      placeholder="4140 Parl"
                    ></InputCard>
                  </DivFormThree>
                </FormThree>

                <FormFour>
                  <DivFormFour>
                    <label>email</label>
                    <InputCard
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="diannerussel@gmail.com"
                    ></InputCard>
                  </DivFormFour>
                  <DivFormFour>
                    <label>Phone Number</label>
                    <InputCard
                      className="form-input"
                      type="number"
                      name="number"
                      placeholder=""
                    ></InputCard>
                  </DivFormFour>
                </FormFour>
                <ButtonCardFour>Save Changes</ButtonCardFour>
              </CardCenter>
            </SettingsRightCenter>

            <SettingsRightBottom>
              <TitleSettings>Change Password</TitleSettings>
              <CardRightBottom>
                <OldPass>
                  <SearchBar>
                    <InputBar
                      type="password"
                      name="password"
                      placeholder="Old Password"
                    ></InputBar>
                    <ButtonSubmit type="submit">
                      <Icon className="fa-solid fa-eye"></Icon>
                    </ButtonSubmit>
                  </SearchBar>
                </OldPass>

                <NewPass>
                  <PassLeft>
                    <SearchBar>
                      <InputBar
                        type="password"
                        name="password"
                        placeholder="New Password"
                      ></InputBar>
                      <ButtonSubmit type="submit">
                        <Icon className="fa-solid fa-eye"></Icon>
                      </ButtonSubmit>
                    </SearchBar>
                  </PassLeft>

                  <PassRight>
                    <div className="search-bar">
                      <input
                        id="Input-bar"
                        type="password"
                        name="password"
                        placeholder="Confirm Password"
                      />
                      <button id="Submit" type="submit">
                        <i className="fa-solid fa-eye"></i>
                      </button>
                    </div>
                  </PassRight>
                </NewPass>

                <ButtonSubmit>Save Changes</ButtonSubmit>
              </CardRightBottom>
            </SettingsRightBottom>
          </FormRight>
        </FormWrapper>
      </div>
    </FormSection>
  );
}
