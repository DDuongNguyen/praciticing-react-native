import React from 'react'
import {Text,View,StyleSheet} from 'react-native'


const Header = () => {
  const {header,text}= styles
  return (
    <View style={header}>
    <Text style={text}>THIS IS THE HEADER FOR CAT APP</Text>
  </View>)
}

const styles= StyleSheet.create({
  header:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
    height:50,
    shadowColor: '#000',
    shadowOffset: {width:2, height:15},
    shadowOpacity: 0.5,
    // elevation: 2,
    // position: 'relative',

  },
  text:{
    fontSize: 20,
  }
})

export default Header;
