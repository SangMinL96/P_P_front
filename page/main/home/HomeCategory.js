import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import HeaderContainer from '../../../component/HeaderContainer';

function HomeCategory() {
  return (
    <HomeCategoryView>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <CategoryTag>펑크룩</CategoryTag>
        <CategoryTag>코듀로이</CategoryTag>
        <CategoryTag>출근룩</CategoryTag>
        <CategoryTag>신입생룩</CategoryTag>
        <CategoryTag>펑크룩</CategoryTag>
        <CategoryTag>코듀로이</CategoryTag>
        <CategoryTag>출근룩</CategoryTag>
        <CategoryTag>신입생룩</CategoryTag>
        <CategoryTag>코듀로이</CategoryTag>
        <CategoryTag>출근룩</CategoryTag>
        <CategoryTag>신입생룩</CategoryTag>
        <CategoryTag>코듀로이</CategoryTag>
        <CategoryTag>출근룩</CategoryTag>
        <CategoryTag>신입생룩</CategoryTag>
      </ScrollView>
    </HomeCategoryView>
  );
}

export default HomeCategory;

const HomeCategoryView = styled.View`
  width: 100%;
  height: 40px;
  border-top-width: 1.3px;
  border-top-color: rgba(194, 194, 194, 0.582);
  border-bottom-width: 1.3px;
  border-bottom-color: rgba(194, 194, 194, 0.582);
  flex-direction: row;
  padding-right: 15px;
  padding-left: 15px;
  align-items: center;
`;

const CategoryTag = styled.Text`
  color: white;
  font-size: 11px;
  margin-left: 3px;
  margin-right: 3px;
  padding: 5px 7px;
  border-radius: 5px;
  background-color: rgba(232, 67, 147, 0.904);
`;








// import React from 'react';
// import { Text } from 'react-native';
// import styled from 'styled-components/native';
// import { ScrollView } from 'react-native';
// import { Image } from 'react-native';
// import HeaderContainer from '../../../component/HeaderContainer';
// import { Dimensions } from 'react-native';
// const { width, height } = Dimensions.get('screen');
// function HomeCategory() {
//   return (
//     <HomeCategoryView>
//       <ScrollView scrollEventThrottle={50} showsHorizontalScrollIndicator={false} pagingEnabled horizontal>
//         <RoomContainer>
//           <RoomCard>
//             <CategoryTag>1회차 펑크룩</CategoryTag>
//           </RoomCard>
//         </RoomContainer>

//         <RoomContainer>
//           <RoomCard>
//             <CategoryTag>1회차 펑크룩</CategoryTag>
//           </RoomCard>
//         </RoomContainer>
//         <RoomContainer>
//           <RoomCard>
//             <CategoryTag>1회차 펑크룩</CategoryTag>
//           </RoomCard>
//         </RoomContainer>
//         <RoomContainer>
//           <RoomCard>
//             <CategoryTag>1회차 펑크룩</CategoryTag>
//           </RoomCard>
//         </RoomContainer>
//         <RoomContainer>
//           <RoomCard>
//             <CategoryTag>1회차 펑크룩</CategoryTag>
//           </RoomCard>
//         </RoomContainer>
//       </ScrollView>
//     </HomeCategoryView>
//   );
// }

// export default HomeCategory;

// const HomeCategoryView = styled.View`
//   width: 100%;
//   height: 60px;
//   border-top-width: 1.3px;
//   border-top-color: rgba(194, 194, 194, 0.582);
//   border-bottom-width: 1.3px;
//   border-bottom-color: rgba(194, 194, 194, 0.582);
//   flex-direction: row;
//   /* padding-right: 15px;
//   padding-left: 15px; */
//   align-items: center;
// `;

// const RoomContainer = styled.View`
//   width: ${width}px;
//   align-items: center;
// `;

// const RoomCard = styled.View`
//   width: ${width - 80}px;
//   justify-content: center;
//   border-radius: 10px;

//   flex-direction: row;
//   align-items: center;
// `;

// const CategoryTag = styled.Text`
// text-align: center;
//   width: 80%;
//   height:40px;
//   color: white;
//   font-size: 11px;
//   padding: 5px 7px;
//   border-radius: 5px;
//   background-color: rgba(232, 67, 147, 0.904);
// `;
