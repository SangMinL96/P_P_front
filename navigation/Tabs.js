import React, { useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import HomeIndex from '../page/main/home/Index';
import { View } from 'react-native';
import { Text } from 'react-native';
import { statusHeight } from '../utils/StatusHeight';
const Tab = createMaterialBottomTabNavigator();

function Tabs({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      header: () => <View style={{ marginTop: statusHeight }}></View>
    });
  }, [navigation]);
  let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#818181"
      barStyle={{ backgroundColor: '#2a2d30' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeIndex}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color }) => <Ionicons name={`${iconName}alarm-outline`} color={color} size={20} />
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
