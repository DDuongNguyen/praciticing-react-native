import React, {Component} from 'react';
import {Text,ScrollView,View,StyleSheet} from 'react-native'
import Cat from './cat.js'

const styles = StyleSheet.create({
  view: {
    height:50,
    backgroundColor: 'skyblue',
  },
});

class CatList extends Component {

  state={
    cats: []
  }


  componentDidMount(){
    // console.log('help');
    fetch('https://api.thecatapi.com/v1/breeds')
    .then(resp=>resp.json())
    .then(data => this.setState(
      {cats:data}
    ))
  }


 conditionalCat = () => {
   if (this.state.cats){
     return this.state.cats.map(cat => {
     return (
       <View>
       <Cat cat={cat} key={cat.name}/>
     </View>)
   })
 }
}


  render(){
    // console.log(this.state.cats);
    return(
      <ScrollView style={styles.view}>
      {this.conditionalCat()}
      </ScrollView>
    )
  }
}
export default CatList
