import { HeaderBackButton } from '@react-navigation/stack';
import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import StepIndicator from 'react-native-step-indicator';
import Agree from './Agree';
import Signup from './Signup';
import Start from './Start';
function SignupIndex({ navigation }) {
  const [current, setCurrent] = useState(2);
  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <>
          <RoomHeaderView style={{marginTop:getStatusBarHeight()+5}}>
            <HeaderBackButton
              {...props}
              onPress={(ev) => {
                if (current === 0) {
                  navigation.navigate('Login');
                } else {
                  setCurrent((props) => props - 1);
                }
              }}
            />
          </RoomHeaderView>
          <StepIndicator stepCount={3} customStyles={customStyles} currentPosition={current} labels={labels} />
        </>
      )
    });
  }, [navigation, current]);

  const labels = ['약관동의', '회원가입', '시작'];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#e84393',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#e84393',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#e84393',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#e84393',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#e84393',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#e84393'
  };
  return (
    <Screen>
      {current === 0 ? (
        <Agree setCurrent={setCurrent} />
      ) : current === 1 ? (
        <Signup setCurrent={setCurrent} />
      ) : current === 2 ? (
        <Start setCurrent={setCurrent} />
      ) : null}
    </Screen>
  );
}

export default SignupIndex;
const Screen = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

const RoomHeaderView = styled.View`
  flex-direction: row;
  z-index: 999;
  margin-bottom: 30px;
  align-items: center;
`;
