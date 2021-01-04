import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Content = styled.div`
  position: absolute;
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  z-index: 1;
  background-color: #fff;
  opacity: 0.7;
  transition: all 600ms ease-in-out;
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  transition: all 600ms ease-in-out;
`;

const MenuItemWrapper = styled.div`
  position: relative;
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &.large {
    height: 380px;
  }

  :first-child {
    margin-right: 7.5px;
  }

  :last-child {
    margin-left: 7.5px;
  }

  :hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
    }

    ${Content} {
      opacity: 1;
    }
  }
`;

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemWrapper
    className={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImage
      style={{ background: `url(${imageUrl}) center/cover no-repeat` }}
    ></BackgroundImage>
    <Content>
      <Title>{title.toUpperCase()}</Title>
      <Subtitle>SHOP NOW</Subtitle>
    </Content>
  </MenuItemWrapper>
);

export default withRouter(MenuItem);
