import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

function HeaderContainer({ children }) {
  return <HeaderView>{children}</HeaderView>;
}

export default HeaderContainer;

const HeaderView = styled.View`
  width: 100%;
  height: 52px;
  background-color: ${props=>props.theme.normalColor};
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: space-between;
  align-items: center;
`;
