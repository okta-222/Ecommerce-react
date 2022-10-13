import React from "react";
import data from "./data";
import WashListCard from "components/WashListCard/WashListCard";
import {
  RowCard,
  CardLeft,
  CardRight,
  ListSection,
  ListWrapper,
} from "./Styles";

export default function List() {
  return (
    <ListSection>
      <div className="container">
        <ListWrapper>
          <RowCard>
            <CardLeft>
              <h4>product name</h4>
            </CardLeft>
            <CardRight>
              <h4>unit price</h4>
              <h4>stock status</h4>
            </CardRight>
          </RowCard>

          {data.map((property) => (
            <WashListCard key={property.id} property={property} />
          ))}
        </ListWrapper>
      </div>
    </ListSection>
  );
}
