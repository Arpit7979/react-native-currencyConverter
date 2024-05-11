import React from 'react'
import type { PropsWithChildren } from 'react'
import { Text,View,StyleSheet } from 'react-native'

type CurrencyButtonProps = PropsWithChildren<{
    name:string,
    flag:string,
}>


const CurrencyButton = (props:CurrencyButtonProps):JSX.Element => {
    return (
        <View style={styles.bottonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.currency}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bottonContainer:{
        alignItems:"center"
    },
    flag:{
       fontSize:20,
       marginBottom:5,
       color:"#ffffff"
    },
    currency:{
       fontSize:20,
       color:"#ffffff"
    },
})


export default CurrencyButton
