import React from "react";
import data from "./data";
import ResultCard from "components/ResultCard/ResultCard";
import { Container, ResultSection } from "./Styles";

export default function Result() {
  return (
    <ResultSection>
      <Container>
        {data.map((property) => (
          <ResultCard key={property.id} property={property} />
        ))}
      </Container> 
    </ResultSection>
  );
}


 