import React from "react";
import Filters from "./Filters";
import Logo from "./Logo";
import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  width: 300px;
  padding-left: 1rem;
  background-color: #292929;
  color: white;
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
