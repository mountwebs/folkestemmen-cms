import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const StyledLogo = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <img src={logo} alt="logo" />
    </StyledLogo>
  );
};

export default Logo;
