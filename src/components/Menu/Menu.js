import React from "react";
import Filters from "./Filters";
import Logo from "./Logo";
import styled from "styled-components";

const StyledMenu = styled.div`
  height: 100vh;
  background-color: grey;
  width: 150px;
`;

const Menu = () => {
  return (
    <StyledMenu>
      <Logo></Logo>
      <Filters></Filters>
    </StyledMenu>
  );
};

export default Menu;
