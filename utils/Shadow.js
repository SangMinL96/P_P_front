import { StyleSheet } from "react-native";

export const shadowStyle = StyleSheet.create({
    feedImage:{
        
        elevation: 10,
    },
    feedShadow: {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3,
  }
})