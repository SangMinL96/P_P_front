import React from 'react';
import { Image } from 'react-native';
import HeaderContainer from '../../../component/HeaderContainer';

function HomeHeader(){
 return (
    <HeaderContainer>
        <Image style={{width:80}} resizeMode={"contain"} source={require("../../../assets/Image/headerLogo.png")} />
    </HeaderContainer>
  );
}

export default HomeHeader;