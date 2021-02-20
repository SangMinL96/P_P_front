import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import HeaderContainer from '../../../component/HeaderContainer';
import HomeHeader from './HomeHeader';
import HomeCategory from './HomeCategory';
import HomeFeed from './HomeFeed';
function HomeIndex({ navigation }) {
  return (
    <Screen>
      <HomeHeader />
      <HomeCategory/>
      <HomeFeed/>
    </Screen>
  );
}

export default HomeIndex;
const Screen = styled.View`
  flex: 1;

  align-items: center;
`;
