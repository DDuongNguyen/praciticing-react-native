import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Footer = () => {
  const {footer,text} = styles
  return (
  <View style={footer}>
    <Text style={text}>
    THIS IS THE FOOTER
    </Text>
  </View>
  )
}

const styles = StyleSheet.create({
  footer:{
    flex:1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
    // height:5,
    // paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {width:2, height:15},
    shadowOpacity: 0.5,
    elevation: 2,
    // position: 'relative',
  },
  text:{
    fontSize: 20,
  }
})

export default Footer;
