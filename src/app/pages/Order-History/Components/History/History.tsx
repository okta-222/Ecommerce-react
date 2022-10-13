import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HistorySection,
  HistoryWrapper,
  HistoryLeft,
  HistoryRight,
  TitleHistoryLeft,
  CardHistory,
  TitleCard,
  HistoryRightBottom,
  TitleHistoryBottom,
  TableHistoryRight,
  TrTable,
  ThTable,
  TdTable,
  TdTableDetails,
} from "./Styles";

export default function History() {

  return (
    <HistorySection>
      <div className="container">
        <HistoryWrapper>
          <HistoryLeft>
            <TitleHistoryLeft>Navigation</TitleHistoryLeft>

            <CardHistory>
              <i className="fa-solid fa-square-poll-horizontal"></i>
              <NavLink to="/dashboard">
                <TitleCard>Dashboard</TitleCard>
              </NavLink>
            </CardHistory>

            <CardHistory>
              <i className="fa-solid fa-repeat"></i>
              <NavLink to="/order-history">
                <TitleCard>order history</TitleCard>
              </NavLink>
            </CardHistory>

            <CardHistory>
              <i className="fa-regular fa-heart"></i>
              <NavLink to="/wash-list">
                <TitleCard>WishList</TitleCard>
              </NavLink>
            </CardHistory>

            <CardHistory>
              <i className="fa-solid fa-image-portrait"></i>
              <NavLink to="/address">
                <TitleCard>address book</TitleCard>
              </NavLink>
            </CardHistory>

            <CardHistory>
              <i className="fa-solid fa-gear"></i>
              <NavLink to="/settings">
                <TitleCard>setting</TitleCard>
              </NavLink>
            </CardHistory>

            <CardHistory>
              <i className="fa-solid fa-right-to-bracket"></i>
              <NavLink to="/login">
                <TitleCard>log out</TitleCard>
              </NavLink>
            </CardHistory>
          </HistoryLeft>

          <HistoryRight>
            <HistoryRightBottom>
              <TitleHistoryBottom>order history</TitleHistoryBottom>
              <TableHistoryRight>
                <thead>
                  <TrTable>
                    <ThTable>ORDER ID</ThTable>
                    <ThTable>DATE</ThTable>
                    <ThTable>TOTAL</ThTable>
                    <ThTable>STATUS</ThTable>
                    <ThTable></ThTable>
                  </TrTable>
                </thead>
                <tbody>
                  <tr>
                    <TdTable>#738</TdTable>
                    <TdTable>8 seb,2020</TdTable>
                    <TdTable>$135.00(5 products)</TdTable>
                    <TdTable>processing</TdTable>
                    <TdTableDetails>view details</TdTableDetails>
                  </tr>
                  <tr>
                    <TdTable>#703</TdTable>
                    <TdTable>24 may,2020</TdTable>
                    <TdTable>$22.00(1 products)</TdTable>
                    <TdTable>on the way</TdTable>
                    <TdTableDetails>view details</TdTableDetails>
                  </tr>
                  <tr>
                    <TdTable>#130</TdTable>
                    <TdTable>22 oct,2020</TdTable>
                    <TdTable>$250.00(4 products)</TdTable>
                    <TdTable>completed</TdTable>
                    <TdTableDetails>view details</TdTableDetails>
                  </tr>
                  <tr>
                    <TdTable>#561</TdTable>
                    <TdTable>1feb,2020</TdTable>
                    <TdTable>$35.00(1 products)</TdTable>
                    <TdTable>completed</TdTable>
                    <TdTableDetails>view details</TdTableDetails>
                  </tr>
                  <tr>
                    <TdTable>#536</TdTable>
                    <TdTable>21 sep,2020</TdTable>
                    <TdTable>$87.00(13 products)</TdTable>
                    <TdTable>completed</TdTable>
                    <TdTableDetails>view details</TdTableDetails>
                  </tr>
                  <tr>
                    <TdTable>#492</TdTable>
                    <TdTable>22 oct, 2022</TdTable>
                    <TdTable>$43.00(7 products)</TdTable>
                    <TdTable>completed</TdTable>
                    <TdTableDetails>view details</TdTableDetails>
                  </tr>
                  <tr>
                    <TdTable>#492</TdTable>
                    <TdTable>22 oct, 2022</TdTable>
                    <TdTable>$43.00(7 products)</TdTable>
                    <TdTable>completed</TdTable>
                    <TdTableDetails>view details</TdTableDetails>
                  </tr>
                  <tr>
                    <TdTable>#536</TdTable>
                    <TdTable>21 sep,2020</TdTable>
                    <TdTable>$123.00(7 products)</TdTable>
                    <TdTable>completed</TdTable>
                    <TdTableDetails>view details</TdTableDetails>
                  </tr>
                  <tr>
                    <TdTable>#561</TdTable>
                    <TdTable>1 feb,2020</TdTable>
                    <TdTable>$35.00(1 products)</TdTable>
                    <TdTable>completed</TdTable>
                    <TdTableDetails>view details</TdTableDetails>
                  </tr>
                  <tr>
                    <TdTable>#130</TdTable>
                    <TdTable>22 sep,2020</TdTable>
                    <TdTable>$250.00(4 products)</TdTable>
                    <TdTable>completed</TdTable>
                    <TdTableDetails>view details</TdTableDetails>
                  </tr>
                  <tr>
                    <TdTable>#703</TdTable>
                    <TdTable>24 may,2020</TdTable>
                    <TdTable>$25.00(1 products)</TdTable>
                    <TdTable>on the way</TdTable>
                    <TdTableDetails>view details</TdTableDetails>
                  </tr>
                  <tr>
                    <TdTable>#536</TdTable>
                    <TdTable>21 sep,2020</TdTable>
                    <TdTable>$123.00(7 products)</TdTable>
                    <TdTable>processing</TdTable>
                    <TdTableDetails>view details</TdTableDetails>
                  </tr>
                </tbody>
              </TableHistoryRight>
            </HistoryRightBottom>
          </HistoryRight>
        </HistoryWrapper>
      </div>



    </HistorySection>
  );
}
