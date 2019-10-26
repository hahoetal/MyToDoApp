import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Subtilte ({title}){
    return(
    <View>
        <Text style ={styles.subtitletext}>{title}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    subtitletext:{
        fontSize:20,
        fontWeight:'bold',
        color: '#a07ece',
    },
  });