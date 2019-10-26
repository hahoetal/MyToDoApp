import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
    return(
    <View style = {styles.headerContainer}>
        <Text style = {styles.headerText}>MyToDoApp</Text>
    </View>
    )};

const styles = StyleSheet.create({
    headerContainer: {
      marginTop: 50,
      marginBottom:50,
    },
    headerText:{
        fontSize:25,
        fontWeight:'bold',
        color: '#a37dcf',
    },
  });
  
  export default Header;