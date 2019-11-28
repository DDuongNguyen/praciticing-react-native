import React, {Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Cat = props => {
    return(
      <View>
      <Text>Name: {props.cat.name}</Text>
      <Text>Affection Level: {props.cat.affection_level}/5</Text>
      </View>
    )
  }

export default Cat;
