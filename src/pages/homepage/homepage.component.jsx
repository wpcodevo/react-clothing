import React from "react";
import styled from "styled-components";
import Directory from "../../components/directory/directory.component";

const HomepageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const Homepage = () => (
  <HomepageWrapper>
    <Directory />
  </HomepageWrapper>
);

export default Homepage;
