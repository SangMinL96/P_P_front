import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import HeaderContainer from '../../../component/HeaderContainer';
import { View } from 'react-native';
import Dimenstions from '../../../utils/Dimenstions';
import { shadowStyle } from '../../../utils/Shadow';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
function HomeFeed() {
  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, []);

  const renderItem = useCallback((item) => console.log('asdfas'), []);
  const keyExtractor = useCallback((item) => console.log(item.id.toString()), []);
  return (
    // <FlatList
    //   refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    //   data={roomData?.getRoomList}
    //   renderItem={renderItem}
    //   keyExtractor={keyExtractor}
    // />
    <HomeFeedView>
      <View style={shadowStyle.feedImage}>
        <FeedImage
          resizeMode={'cover'}
          source={{ uri: 'https://newsimg.hankookilbo.com/cms/articlerelease/2017/08/15/201708151118539364_1.jpg' }}
        />
      </View>
      <FeedContent style={shadowStyle.feedShadow}>
        <FeedProfile>
          <ProfileView>
            <RoomAvatar
              resizeMode="cover"
              source={{ uri: 'https://newsimg.hankookilbo.com/cms/articlerelease/2017/08/15/201708151118539364_1.jpg' }}
            />
            <DtlTextView>
              <DtlBoldText>SunderPunch</DtlBoldText>
              <DtlText>176cm | 74kg | 260mm</DtlText>
            </DtlTextView>
          </ProfileView>
          <FollowView>
            {/* checkmark-circle-sharp */}
            <Ionicons name={`${iconName}add-circle-outline`} color={'gray'} size={17} />
            <FollowText>팔로우</FollowText>
          </FollowView>
        </FeedProfile>
        <FeedTitleView showsHorizontalScrollIndicator={false}>
          <TitleText>패션피플스타일랭킹 테스트 피드패션피플스타일랭</TitleText>
        </FeedTitleView>
        <ScrollView style={{ width: '90%',height:0 }} showsHorizontalScrollIndicator={false} horizontal>
          <TouchableOpacity>
            <FeedTagText>#패린이</FeedTagText>
          </TouchableOpacity>
          <TouchableOpacity>
            <FeedTagText>#코듀로이</FeedTagText>
          </TouchableOpacity>
          <TouchableOpacity>
            <FeedTagText>#골덴바지</FeedTagText>
          </TouchableOpacity>
          <TouchableOpacity>
            <FeedTagText>#골덴</FeedTagText>
          </TouchableOpacity>
          <TouchableOpacity>
            <FeedTagText>#패션피플</FeedTagText>
          </TouchableOpacity>
          <TouchableOpacity>
            <FeedTagText>#컨버스하이</FeedTagText>
          </TouchableOpacity>
          <TouchableOpacity>
            <FeedTagText>#코디추천</FeedTagText>
          </TouchableOpacity>
          <TouchableOpacity>
            <FeedTagText>#패린이</FeedTagText>
          </TouchableOpacity>
          <TouchableOpacity>
            <FeedTagText>#패린이</FeedTagText>
          </TouchableOpacity>
          <TouchableOpacity>
            <FeedTagText>#패린이</FeedTagText>
          </TouchableOpacity>
        </ScrollView>
        <BtnView>
          <LikeView>
            <Ionicons name={`${iconName}heart-circle`} color={'red'} size={23} />
            <Like>235</Like>
          </LikeView>
          <Divider/>
          <LikeView>
            <Ionicons name={`${iconName}chatbox-outline`} color={'gray'} size={20} />
            <Like>1500</Like>
          </LikeView>
          <Divider/>
          <LikeView>
            <Ionicons name={`${iconName}arrow-redo-outline`} color={'gray'} size={23} />
          </LikeView>
        </BtnView>
      </FeedContent>
    </HomeFeedView>
  );
}

export default HomeFeed;

const HomeFeedView = styled.View`
  position: relative;
  width: ${Dimenstions.width}px;
  padding: 15px;
  height: 590px;
  align-items: center;
`;

const FeedImage = styled.Image`
  z-index: 99;
  width: 310px;
  height: 380px;
  border-radius: 10px;
`;

const FeedContent = styled.View`
  position: absolute;
  bottom: 0px;
  width: 350px;
  align-items: center;
  height: 360px;
  border-radius: 10px;
  background-color: rgb(240, 240, 240);
`;
const FeedProfile = styled.View`
  width: 90%;
  margin-top: 50%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ProfileView = styled.View`
  flex-direction: row;
  align-items: center;
`;
const RoomAvatar = styled.Image`
  border-radius: 10px;
  width: 40px;
  height: 40px;
`;
const DtlTextView = styled.View`
  margin-left: 10px;
`;
const DtlBoldText = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

const DtlText = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.darkGreyColor};
`;
const FollowView = styled.TouchableOpacity`
  align-items: center;
`;
const FollowText = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.darkGreyColor};
`;

const FeedTitleView = styled.ScrollView`
  width: 90%;
  height: 40px;
`;

const TitleText = styled.Text`
  margin-top: 5px;
  font-size: 12.5px;
  color: ${(props) => props.theme.blackColor};
`;
const FeedTagText = styled.Text`
  color: ${(props) => props.theme.darkBlueColor};
  margin-top: 5px;
  font-size: 13px;
  margin-left: 3px;
  margin-right: 3px;
`;

const BtnView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: rgba(172, 172, 172, 0.514);
`;
const LikeView = styled.TouchableOpacity`
width: ${100 /3}%;
height:30px;
/* background-color: red; */
flex-direction: row;
justify-content: center;
align-items: center;
`;
const Like = styled.Text`
  font-size: 12px;
  margin-left: 5px;
  color: ${(props) => props.theme.blackColor};
`;
const Divider =styled.Text`
border-left-color: rgba(172, 172, 172, 0.514);
border-left-width: 1px;
width: 1px;
height:30px;
`