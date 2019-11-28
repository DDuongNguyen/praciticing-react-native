import React, {Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

class Cat extends Component {
  render() {
    console.log(this.props.cat)
    return(
      <View>
      <Text>Name: {this.props.cat.name}</Text>
      <Text>Affection Level: {this.props.cat.affection_level}/5</Text>
      </View>
    )
  }
}

export default Cat;
