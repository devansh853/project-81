import React,{Component} from 'react'
import {Text,View} from 'react-native'

export default class Feed extends Component{
    render(){
        return(
            <View style = {{flexL:1,justifyContent: 'center',alignItem:'center'}}>
                <Text>Feeds</Text> 
            </View>
        )
    }
}