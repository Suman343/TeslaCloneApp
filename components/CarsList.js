import React from 'react';
import { Text,View,FlatList,StyleSheet,Dimensions } from 'react-native';

import CarItem from './CarItem';
import cars from './cars';

function CarsList(props) {
    return (
        <View style={styles.container }>
            <FlatList 
                keyExtractor={item => item.name}
                data={cars}
                renderItem={({item}) =>< CarItem car={item}/>}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
                style={styles.list}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
    },
    list:{
        height:Dimensions.get('window').height,
    },
})

export default CarsList;