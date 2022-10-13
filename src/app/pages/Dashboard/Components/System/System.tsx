import React from "react";
import img from "images/img/avatar-04.png";
import { NavLink } from "react-router-dom";
import TableCard from "components/TableCard/TableCard";
import data from "./data";
import {
  CardSysLeft,
  CardTopOne,
  CardTopTwo,
  ImageCardOne,
  ItemSysBottom,
  ListSysBottom,
  ParagraphCardTwo,
  SystemBottomWrapper,
  SystemLeft,
  SystemRight,
  SystemSection,
  SystemTopWrapper,
  SystemWrapper,
  TextCardOne,
  TitleCardOne,
  TitleCardTwo1,
  TitleCardTwo2,
  TitleSysLeft,
  TitleSysLeft2,
} from "./Styles";
export default function System() {
  const modalStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,0.85)",
    },
    content: {
      position: "absolute",
      top: "5rem",
      left: "5rem",
      right: "5rem",
      bottom: "5rem",
      backgroundColor: "paleturquoise",
      borderRadius: "1rem",
      padding: "1.5rem",
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  return (
    <SystemSection>
      <div className="container">
        <SystemWrapper>
          <SystemLeft>
            <TitleSysLeft>Navigation</TitleSysLeft>

            <CardSysLeft>
              <i className="fa-solid fa-square-poll-horizontal"></i>
              <NavLink to="/dashboard">
                <TitleSysLeft2>Dashboard</TitleSysLeft2>
              </NavLink>
            </CardSysLeft>

            <CardSysLeft>
              <i className="fa-solid fa-repeat"></i>
              <NavLink to="/order-history">
                <TitleSysLeft2>Order History</TitleSysLeft2>
              </NavLink>
            </CardSysLeft>

            <CardSysLeft>
              <i className="fa-regular fa-heart"></i>
              <NavLink to="/wash-list">
                <TitleSysLeft2>Wishlist</TitleSysLeft2>
              </NavLink>
            </CardSysLeft>

            <CardSysLeft>
              <i className="fa-solid fa-image-portrait"></i>
              <NavLink to="/address">
                <TitleSysLeft2>address book</TitleSysLeft2>
              </NavLink>
            </CardSysLeft>

            <CardSysLeft>
              <i className="fa-solid fa-gear"></i>
              <NavLink to="/settings">
                <TitleSysLeft2>Settings</TitleSysLeft2>
              </NavLink>
            </CardSysLeft>

            <CardSysLeft>
              <i className="fa-solid fa-right-to-bracket"></i>
              <NavLink to="/login">
                <TitleSysLeft2>log out</TitleSysLeft2>
              </NavLink>
            </CardSysLeft>
          </SystemLeft>

          <SystemRight>
            <SystemTopWrapper>
              <CardTopOne>
                <ImageCardOne src={img} alt="img"></ImageCardOne>
                <TextCardOne>
                  <h3>Deanna Russell</h3>
                  <span>customer</span>
                  <NavLink to="/settings">
                    <TitleCardOne>edit profile</TitleCardOne>
                  </NavLink>
                </TextCardOne>
              </CardTopOne>
              <CardTopTwo>
                <TitleCardTwo1>building address</TitleCardTwo1>
                <TitleCardTwo2>Deanna Russell</TitleCardTwo2>
                <ParagraphCardTwo>
                  2212 parker rd, allentown, new mexico <br />
                  31134
                </ParagraphCardTwo>
                <h4>
                  deannarussell@gmail.com <br />
                  (671) 555-0110
                </h4>
                <TitleSysLeft>Edit Address</TitleSysLeft>
              </CardTopTwo>
            </SystemTopWrapper>

            <SystemBottomWrapper>
              <ListSysBottom>
                <li>recent order history</li>
                <NavLink to="/order-history">
                  <ItemSysBottom>view all</ItemSysBottom>
                </NavLink>
              </ListSysBottom>

              {/* {data.map((property) => (
                <TableCard key={property.id} property={property} />
              ))} */}
            </SystemBottomWrapper>
          </SystemRight>
        </SystemWrapper>
      </div>
    </SystemSection>
  );
}
