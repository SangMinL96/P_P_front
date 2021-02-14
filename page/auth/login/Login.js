import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import styled from 'styled-components/native';
import Screen from '../../../utils/Dimenstions';
import TextInput from '../../../component/TextInput';
function Login() {
  const { control, handleSubmit, setValue, errors, clearErrors } = useForm();
  const navigation = useNavigation();


     /**
   * 로그인 submit 폼
   * @param {object} data 로그인 데이터 인풋값
   */
  const onSubmit = async (data) => {
    try {
      //   const rslt = await loginMt({ variables: { param: data } });
      //   const userInfo = rslt.data.user;
      //   if(userInfo){
      //     setLogLoading(false)
      //   }
      //  onLogin(userInfo);
    } catch (err) {}
  };
  return (
    <LoginView>
      <Logo resizeMode="contain" source={require('../../../assets/Image/mainLogo.jpg')} />
      <InputView>
        <View>
          <TextInput control={control} label={'아이디'} name={'id'} rule={true} />
          <TextInput control={control} label={'비밀번호'} name={'pw'} pwType={true} rule={true} />
        </View>
        <View>
          <Button
            titleStyle={{ fontWeight: 'bold' }}
            containerStyle={{ marginLeft: 10, borderRadius: 10 }}
            buttonStyle={{ backgroundColor: '#e84393', width: 105, height: 105 }}
            title="로그인"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </InputView>
      <Button
        titleStyle={{ fontWeight: 'bold', color: '#e84393' }}
        buttonStyle={{
          backgroundColor: '#f5f5f5',
          borderColor: '#dadada',
          borderWidth: 1.5,
          height: 50,
          borderRadius: 10
        }}
        containerStyle={{ width: '100%' }}
        title="회원가입"
        onPress={() => navigation.navigate('SignUp')}
      />
      <FindView>
        <TouchableOpacity>
          <FindText>아이디 찾기 | </FindText>
        </TouchableOpacity>
        <TouchableOpacity>
          <FindText>비밀번호 찾기</FindText>
        </TouchableOpacity>
      </FindView>
      <DividerView>
        <SocialText>소셜 로그인</SocialText>
      </DividerView>
      <SocialView>
        <Touchable>
          <SocialLogo resizeMode="contain" source={require('../../../assets/Image/f.jpg')} />
        </Touchable>
        <Touchable>
          <SocialLogo resizeMode="contain" source={require('../../../assets/Image/k.jpg')} />
        </Touchable>
      </SocialView>
    </LoginView>
  );
}

export default Login;
const LoginView = styled.View`
  flex: 1;
  width: 80%;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.Image`
  width: 48%;
  border-radius: 15px;
`;
const InputView = styled.View`
  width: 63%;
  margin-top: 10%;
  margin-bottom: 8%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const FindView = styled.View`
  width: 98%;
  margin-top: 5px;
  flex-direction: row;
`;
const FindText = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.darkGreyColor};
`;

const DividerView = styled(Divider)`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 40px;
  margin-bottom: 20px;
`;
const SocialText = styled.Text`
  padding: 10px;
  background-color: #f1f1f1;
  color: ${(props) => props.theme.darkGreyColor};
`;
const SocialView = styled.View`
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
`;
const SocialLogo = styled.Image`
  width: 70%;
  border-radius: 5px;
`;

const Touchable = styled(TouchableOpacity)`
  width: 50%;
  justify-content: center;
  align-items: center;
`;
