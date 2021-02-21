import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import Dimenstions from '../../../utils/Dimenstions';
import { ScrollView, FlatList, Platform, RefreshControl } from 'react-native';
import FeedList from '../../../component/FeedList';

let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
function HomeFeed() {
  const [refreshing, setRefreshing] = useState(false);
  const data = [1, 1, 2, 3, 4, 5, 6];
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

  const renderItem = useCallback((item) => <FeedList />, []);
  const keyExtractor = useCallback((item) => console.log(item), []);
  return (
    <HomeFeedView>
      <FlatList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        data={data || null}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </HomeFeedView>
  );
}

export default HomeFeed;

const HomeFeedView = styled.View`
  width: 100%;
  padding-bottom: 15%;
`;
