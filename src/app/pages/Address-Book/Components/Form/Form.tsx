import React from "react";
import { NavLink } from "react-router-dom";
import { Button, ButtonWrapper, FormInput, FormLabel, FormSelect, FormWrapper, OverViewWrapper } from "./Styles";

export default function Form() {
  return (
    <FormWrapper>
      <div className="container">
        <ButtonWrapper>
        <NavLink to="/dashboard"><Button>Back</Button></NavLink>
          <Button>New Address</Button>
        </ButtonWrapper>

        <OverViewWrapper>
          <FormLabel>First name</FormLabel>
          <FormInput className="form-input"type="text" name="text" placeholder="First name" />
          <FormLabel>Last name</FormLabel>
          <FormInput className="form-input"type="text" name="text" placeholder="Last name" />
          <FormLabel>Phone</FormLabel>
          <FormInput className="form-input"type="number" name="number" placeholder="Phone Number" />
          <FormLabel>City</FormLabel>
          <FormSelect className="form-input select">
            <option value="">---Please Select---</option>
            <option value="egypt">egypt</option>
            <option value="saudi">saudi</option>
            <option value="emarat">emarat</option>
            <option value="qatar">qatar</option>
            <option value="morocco">morocco</option>
            <option value="syria">syria</option>
          </FormSelect>
          <FormLabel>Region</FormLabel>
          <FormSelect className="form-input select">
            <option value="">---Please Select---</option>
            <option value="cairo">cairo</option>
            <option value="alex">alex</option>
            <option value="sohag">sohag</option>
          </FormSelect> 
        </OverViewWrapper>

        <ButtonWrapper>
        <NavLink to="/dashboard"><Button>Cancel</Button></NavLink>
          <Button>Continue</Button>
        </ButtonWrapper>
      </div>
    </FormWrapper>
  );
}
