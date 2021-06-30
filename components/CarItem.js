import React from 'react';
import { Text,View,StyleSheet,ImageBackground,Dimensions } from 'react-native';
import StyledButton from './StyledButton';

function CarItem(props) {

    const {name,tagline,taglineCTA,image}= props.car;

    return (
        <View style={styles.carContainer}>
        <ImageBackground 
        source={image} 
        style={styles.image}/>
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}{' '}<Text style={styles.subtitleCTA}>{taglineCTA}</Text></Text>
        </View>

        <View style={styles.buttonContainer}>
          <StyledButton 
            type="primary"
            content={"Custom Order"}
            onPress={()=>{console.warn('Custom order is pressed.')}}  
          /> 

          <StyledButton 
            type="Secondary"
            content={"Existing Inventory"}
            onPress={()=>{console.warn('Existing Inventory is pressed.')}}  
          /> 
        </View>
        

      </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
      position:"absolute",
      bottom:50,
      width:"100%",

    },
    carContainer:{
        height:Dimensions.get('window').height,
        width:"100%",
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      image:{
        height:"100%",
        width:"100%",
        resizeMode:'cover',
        position:'absolute',
      },
      subtitle:{
        fontSize:16,
        color:"#5c5e62",
      },
      subtitleCTA:{
        textDecorationLine:"underline",
      },
      title:{
        fontSize:40,
        fontWeight:"500",
    
      },
      titles:{
        marginTop:'30%',
        width:'100%',
        alignItems:"center",
      },
})
export default CarItem;