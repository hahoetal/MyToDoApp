import React from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

export default function Listitem ({name, isComplete, changeComplete, deleteItem}){
    return(
    <View style={styles.listitembox}>
        <View style={styles.makerow}>
            <TouchableOpacity onPress={changeComplete}>
                <AntDesign name ={isComplete? "star" : "staro"} size={20} style={styles.checkmargin}/>
            </TouchableOpacity>
            <Text style={styles.item}>{name}</Text>
        </View>

        <TouchableOpacity onPress={deleteItem}>
            <AntDesign name ="close" size={20}/>
        </TouchableOpacity>

    </View>
    );
};

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    listitembox:{
        borderBottomWidth:1,
        borderColor: '#bfbff2',
        padding:5,
        marginTop:10,
        width: width-80,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    item:{
        fontSize:15,
        fontWeight:"bold",
        color:'#482a6f',
    },
    makerow:{
        flexDirection:"row",
    },
    checkmargin:{
        marginRight:10,
    },
  });