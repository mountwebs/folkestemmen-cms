import React from "react";
import styled from "styled-components";
import arrowIcon from "../../assets/icons/arrow.svg";

const StyledFilters = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 2rem 10px;
`;
const StyledHeading = styled.div`
  padding-bottom: 0.8rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #565656;
`;

const StyledLinks = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 4rem;

  span {
    margin-bottom: 0.5rem;
  }
  img {
    width: 1.2rem;
    margin-right: 10px;
  }
`;

const StyledButton = styled.button`
  position: relative;
  top: -30%;
  left: 0%;
  align-self: flex-end;
  background-color: transparent;
  color: white;
  font-size: inherit;
  border: 1px solid white;
  border-radius: 9px;
  transform: translate(-30%, -30%);
`;

const FILTERS = [{ name: "Tema" }, { name: "Innbyggere" }, { name: "Kommune" }];
const GRUPPER = [
  { name: "Barne og unge" },
  { name: "Sentrum" },
  { name: "Utmark" },
];

const Filters = () => {
  return (
    <StyledFilters>
      <StyledHeading>
        <span>Oversikt</span>
      </StyledHeading>
      <StyledLinks>
        {FILTERS.map((f) => (
          <span>
            <img src={arrowIcon} alt="" />
            {f.name}
          </span>
        ))}
      </StyledLinks>
      <StyledHeading>
        <span>Grupper</span>
      </StyledHeading>
      <StyledLinks>
        <StyledButton>+ Ny</StyledButton>
        {GRUPPER.map((f) => (
          <span>
            <img src={arrowIcon} alt="" />
            {f.name}
          </span>
        ))}
      </StyledLinks>
    </StyledFilters>
  );
};

export default Filters;
