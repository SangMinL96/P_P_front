import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styled from "styled-components/native"
import Login from './Login';

function LoginIndex({navigation}){
  useEffect(() => {
    navigation.setOptions({
      header:()=>null
    })
}, [navigation]);
 return (
   <Screen>
      <Login/>
   </Screen>
  );
}

export default LoginIndex;
const Screen = styled.View`
 flex: 1;
 justify-content: space-evenly;
 align-items: center;
 
`;
