import React from 'react';
import { Text,View,StyleSheet,Pressable} from 'react-native';

function StyledButton({type,content,onPress}) {
    const backgroundColor = type ==="primary"?"#171A20CC":"#FFFFFFA6";
    const textColor = type ==="primary"?"#FFFFFFA6":"#171A20CC";
    return (
        <View style={styles.container}>

            <Pressable 
            style={[styles.button,{backgroundColor:backgroundColor}]} 
            onPress={() => onPress()}>
                <Text style={[styles.text,{color:textColor}]}> {content}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,

    },
    container:{
        padding:10,
        width:"100%",
    },
    text:{
        fontSize:12,
        fontWeight:"500",
        textTransform:"uppercase",
    },

})
export default StyledButton;