import React from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import Content from "./Content/Content";
import Login from "./Login/Login";
import Search from "./Search/Search";

const StyledLayout = styled.div`
  display: flex;
`;

const Layout = () => {
  return (
    <StyledLayout>
      <Menu class="menu"></Menu>
      <Content class="content"></Content>
      <Search></Search>
      <Login></Login>
    </StyledLayout>
  );
};

export default Layout;
