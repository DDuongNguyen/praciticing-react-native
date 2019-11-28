/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 // *
 // *  */

import React from 'react';
import Header from './src/components/header.js'
import CatList from './src/components/body/catList.js'
import Footer from './src/components/footer.js'
import {View,StyleSheet} from 'react-native'

const App = () => {
  return (
    <View style= {styles.main}>
    <Header/>
    <CatList/>
    <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    flex:1
  }

});

export default App;
