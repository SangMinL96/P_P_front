import { HeaderBackButton } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

function SignupIndex({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <RoomHeaderView>
          <HeaderBackButton
            {...props}
            onPress={(ev) => {
              navigation.navigate('Login');
            }}
          />
        </RoomHeaderView>
      )
    });
  }, [navigation]);
  return (
    <View>
      <Text>dsfsd</Text>
    </View>
  );
}

export default SignupIndex;
const RoomHeaderView = styled.View`
  flex-direction: row;
  margin-top: 30px;
  align-items: center;
`;
